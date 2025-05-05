import argon2 from 'argon2';
import prisma from '../config/prisma';
import { generateAccessToken, generateRefreshToken } from '../utils/token';

export const registerUser = async (email: string, password: string, role: "CUSTOMER" | "ADMIN", username:string) => {
  const hashedPassword = await argon2.hash(password);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role,
      username
    },
  });

  return user;
};

export const loginUser = async (identifier: string, password: string)  => {

  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: identifier },
        { username: identifier }
      ]
    }
  });
  
  if (!user || !(await argon2.verify(user.password, password))) {
    throw new Error('Invalid credentials');
  }

  return {
    accessToken: generateAccessToken(user.id, user.role),
    refreshToken: generateRefreshToken(user.id)
  };
};

export const userInfo = async (id:number)  => {
  try {
    
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        email:true,
        username:true,
        role:true,
       // profileUrl:true
      }
    });
  
    return user;
  } catch (error) {
    
  }
};

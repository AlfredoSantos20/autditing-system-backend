import argon2 from 'argon2';
import prisma from '../config/prisma';
import { generateAccessToken, generateRefreshToken } from '../utils/token';
import { archiveOldActivityLogs } from '../utils/activityCleanup';

export const registerUser = async (email: string, password: string, role: "CUSTOMER" | "ADMIN", username:string, name:string) => {
  const hashedPassword = await argon2.hash(password);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role,
      username,
      name
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
  
  
   let isPasswordValid = false;

  if (user) {
    isPasswordValid = await argon2.verify(user.password!, password);
  }

  if (!user && !isPasswordValid) {
    throw new Error('Invalid email or username and password!');
  }

  if (!user) {
    throw new Error('Incorrect email or username!');
  }

  if (!isPasswordValid) {
    throw new Error('Incorrect password!');
  }
 
  if (!user.id || !user.role) {
    throw new Error('User id or role is missing!');
  }

  await archiveOldActivityLogs();

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

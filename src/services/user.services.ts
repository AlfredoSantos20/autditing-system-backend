
import prisma from '../config/prisma';

export const getSections = async () => {
  try {
    const sections = await prisma.section.findMany({
      include: {
        usernames: true, 
      },
    });
    return sections;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error('Failed to fetch sections: ' + message);
  }
};

export const getSectionById = async (id: number) => {
  try {
    const section = await prisma.section.findUnique({
      where: { id },
      include: {
        usernames: true, 
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error('Failed to fetch section by id: ' + message);
  }
};

export const assignUserToSection = async (usernameId: number, sectionId: number) => {
  try {
    
    const username = await prisma.username.findUnique({
      where: { id: usernameId },
    });
    if (!username) {
      throw new Error('Username not found');
    }

    
    const updatedUsername = await prisma.username.update({
      where: { id: usernameId },
      data: {
        sectionId,
      },
    });
    return updatedUsername;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error('Failed to assign user to section: ' + message);
  }
};

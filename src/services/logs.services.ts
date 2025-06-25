import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createActivityLog = async (
  usernameId: number,
  activity: string
) => {
  try {
    await prisma.activityLog.create({
      data: {
        activity,
        username: {
          connect: { id: usernameId },
        },
      },
    });

    console.log(`Logged activity: "${activity}" for usernameId: ${usernameId}`);
  } catch (error) {
    console.error('Failed to log activity:', error);
    throw error;
  }
};


export const getActivityLog = async () => {
  try {
    const activityLogs = await prisma.activityLog.findMany({
      where: {
        archived: false,
      },
      include: {
        username: true,
      },
      orderBy: {
        timestamp: 'desc',
      },
    });
    return activityLogs;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error('Failed to fetch activity logs: ' + message);
  }
};

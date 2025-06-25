
import prisma from '../config/prisma';

export const archiveOldActivityLogs = async () => {
  const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago

  try {
    const result = await prisma.activityLog.updateMany({
      where: {
        timestamp: {
          lt: cutoff,
        },
        archived: false,
      },
      data: {
        archived: true,
      },
    });

    console.log(`Archived ${result.count} old activity logs.`);
  } catch (err) {
    console.error('Failed to archive old logs:', err);
  }
};

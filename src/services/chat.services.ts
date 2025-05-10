import prisma from '../config/prisma';

export const sendMessage = async (senderId: number, request: string, response?: string) => {
  try {
    const chat = await prisma.chat.create({
      data: { senderId, request, response},
    });
    return chat;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error('Failed to send message');
  }
};

export const getMessages = async (userId: number) => {
  try {
    const chats = await prisma.chat.findMany({
      where: {
        OR: [
          { senderId: userId },
        ],
      },
      orderBy: { createdAt: 'asc' },
    });
    return chats;
  } catch (error) {
    console.error('Error retrieving messages:', error);
    throw new Error('Failed to retrieve messages');
  }
};

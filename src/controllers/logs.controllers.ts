import { Request, Response } from 'express';
import { createActivityLog, getActivityLog } from '../services/logs.services';

export const handleActivityLog = async (req: Request, res: Response) => {
  const { usernameId, activity } = req.body;

  if (!usernameId || !activity) {
    return res.status(400).json({ message: 'usernameId and activity are required.' });
  }

  try {
    await createActivityLog(usernameId, activity);
    return res.status(201).json({ message: 'Activity logged successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to log activity.' });
  }
};


export const getAllLogsController = async (req: Request, res: Response) => {
  try {
    const logs = await getActivityLog();
    res.status(200).json(logs);
  } catch (error) {
    console.error('Error fetching logs:', error);
    res.status(500).json({ message: 'Failed to fetch activity logs.' });
  }
};


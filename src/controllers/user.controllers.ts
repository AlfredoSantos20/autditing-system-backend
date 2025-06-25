
import { Request, Response } from 'express';
import { getSections, getSectionById, assignUserToSection } from '../services/user.services';

export const fetchSections = async (req: Request, res: Response) => {
  try {
    const sections = await getSections();
    res.status(200).json(sections);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchSectionById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const section = await getSectionById(Number(id));
    if (section !== null && section !== undefined) {
      res.status(200).json(section);
    } else {
      res.status(404).json({ message: 'Section not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const assignUser = async (req: Request, res: Response) => {
  const { usernameId, sectionId } = req.body;

  // Input validation
  if (!usernameId || !sectionId) {
    return res.status(400).json({ message: 'Both usernameId and sectionId are required.' });
  }

  try {
    const updatedUser = await assignUserToSection(usernameId, sectionId);
    res.status(200).json(updatedUser);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

import { Request, Response } from 'express';
import prisma from '../index';

export const createCandidate = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, address, education, workExperience } = req.body;
    const cvFilePath = req.file ? req.file.path : '';

    // Basic validation
    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const candidate = await prisma.candidate.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        address: address || '',
        education: education || '[]',
        workExperience: workExperience || '[]',
        cvFilePath,
      },
    });

    res.status(201).json(candidate);
  } catch (error) {
    console.error('Error creating candidate:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

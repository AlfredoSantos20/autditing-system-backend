import { Router } from 'express';
import {  login,  refreshAccessToken, register } from '../controllers/auth.controllers';
import { authenticateToken } from '../middlewares/auth.middleware';
import { Roles } from '../middlewares/role.middleware';
import { UserRole } from '@prisma/client';
import { assignUser, fetchSectionById, fetchSections } from '../controllers/user.controllers';

const router = Router();


router.get('/get-sections', authenticateToken, Roles(UserRole.ADMIN), fetchSections);

router.get('/get-section/:id', authenticateToken, Roles(UserRole.ADMIN), fetchSectionById);

router.post('/assign-user', authenticateToken, Roles(UserRole.ADMIN), assignUser as any);


export default router;

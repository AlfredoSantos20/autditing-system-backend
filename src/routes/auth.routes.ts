import { Router } from 'express';
import { registerUser, loginUser } from '../services/auth.services';
import { authenticateToken } from '../middlewares/auth.middleware';
import {  login,  refreshAccessToken, register } from '../controllers/auth.controllers';
import { requestOTP, confirmOTP, submitNewPassword} from '../controllers/forgotPassword.controllers';

const router = Router();

router.post('/register', register as any);

router.post('/login', login);

router.post('/refresh-token', refreshAccessToken as any);

router.post('/request-otp', requestOTP as any);
router.post('/confirm-otp', confirmOTP as any);
router.post('/reset', submitNewPassword as any); 

export default router;

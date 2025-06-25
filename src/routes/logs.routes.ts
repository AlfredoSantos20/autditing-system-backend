import { Router } from 'express';
import { handleActivityLog, getAllLogsController } from '../controllers/logs.controllers';

const router = Router();

router.post('/logs', handleActivityLog as any);
router.get('/get-logs', getAllLogsController as any);
export default router;

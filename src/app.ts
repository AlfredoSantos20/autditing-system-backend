import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import authRoutes from './routes/auth.routes';
import otp from './routes/otp.routes';
import sectionRoutes from './routes/user.routes';
import logsRoutes from './routes/logs.routes';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();

app.use(json());
app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use('/images', express.static(path.join(__dirname, '..', 'assets', 'images')));
    
app.use('/api/auth', authRoutes);
app.use('/api/forgot-password/', otp);
app.use('/api/sections', sectionRoutes)
app.use('/api/activity', logsRoutes)

export default app;

import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import authRoutes from './routes/auth.routes';
import forgotPasswordRoutes from './routes/auth.routes';
import cors from 'cors';

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
    
app.use('/api/auth', authRoutes);
app.use('/api/forgot-password', forgotPasswordRoutes);

export default app;

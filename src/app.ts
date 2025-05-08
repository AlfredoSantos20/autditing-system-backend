import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import authRoutes from './routes/auth.routes';
import categoryRoutes from './routes/categories.routes';
import otp from './routes/otp.routes';
import plants from './routes/plants.routes';

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
app.use('/api/categories/', categoryRoutes);
app.use('/api/forgot-password/', otp);
app.use('/api/plants/', plants);

export default app;

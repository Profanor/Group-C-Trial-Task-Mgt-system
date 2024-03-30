import express from 'express';
import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import main from '../config/db';
import cors from 'cors';

const app = express();

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Routes
import indexRouter from './routes/index';
import usersRouter from './routes/users';

// Use your routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  // Log the error
  console.error(err);

  // Send an error response
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});

// Serve the React app for any other route
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

export default app;

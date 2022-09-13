import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import postRouter from './routes/posts.js';
import userRouter from './routes/user.js';
import teacherRouter from './routes/teacher.js';
import studentRouter from './routes/student.js';

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRouter);
app.use('/users', userRouter);
app.use('/teachers', teacherRouter);
app.use('/students', studentRouter);

export default app;

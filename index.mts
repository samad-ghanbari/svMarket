import express from 'express';
import dotenv from 'dotenv';
import mainRouter from '#backend/routes/mainRouter.mts';

//import { handler } from './build/handler.js';

dotenv.config({ debug: false });

const app = express();

app.use('/api', mainRouter);

// app.get('/api', (req, res) => {
// 	res.send('Hello from Express!!');
// });

//app.use(handler);

app.listen(process.env.EX_PORT, () => {
	console.log(`Express server running at http://localhost:${process.env.EX_PORT}`);
});

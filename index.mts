import express from 'express';
import dotenv from 'dotenv';

//import { handler } from './build/handler.js';

dotenv.config();

const app = express();

app.get('/api', (req, res) => {
	res.send('Hello from Express!!');
});

//app.use(handler);

app.listen(process.env.EX_PORT, () => {
	console.log(`Express server running at http://localhost:${process.env.EX_PORT}`);
});

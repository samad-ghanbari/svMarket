import express from 'express';
import dotenv from 'dotenv';
import mainRouter from '#backend/routes/mainRouter.mts';

import { handler } from './build/handler.js';

dotenv.config({ debug: false });

const app = express();
app.use(express.json());
app.use('/api', mainRouter);

app.use(handler);

app.listen(process.env.EX_PORT, () => {
	console.log(`Express server running at http://localhost:${process.env.EX_PORT}`);
});

import express from 'express';
import { handler } from './build/handler.js';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
	res.send('Hello from Express!');
});

app.use(handler);

app.listen(port, () => {
	console.log(`Express server running at http://localhost:${port}`);
});

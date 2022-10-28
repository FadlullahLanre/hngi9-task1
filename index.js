const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config({ path: './config.env' });
const userRoute = require('./routes/user');
const connectDB = require('./DB/connect');

const app = express();

app.use(cors({
	origin : '*'
}))
app.use(express.json());

app.use('/api/user', userRoute);

app.all('*', (req, res, next) => {
	
	next(res.send(`Can't find ${req.originalUrl} on this server`, 404));
});

const port = process.env.PORT || 4000;
const start = async () => {
	await connectDB(process.env.MONGO_URI);

	app.listen(port, () => {
		console.log(`Server is listening on port ${port}...`);
	});
};

start();
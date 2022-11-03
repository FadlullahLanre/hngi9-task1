const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user');


const app = express();

app.use(cors({
	origin : '*'
}))
app.use(express.json());

app.use('/api/arth', userRoute);

app.all('*', (req, res, next) => {
	
	next(res.send(`Can't find ${req.originalUrl} on this server`, 404));
});

const port = process.env.PORT || 4000;
const start = async () => {
	
	app.listen(port, () => {
		console.log(`Server is listening on port ${port}...`);
	});
};

start();
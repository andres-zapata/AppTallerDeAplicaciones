// server.js
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello World ! ");
});

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

// Our DB Configuration
require('./src/database');

const bodyParser = require('body-parser');

// Routes
const postRouter = require('./src/routes/post.router');
const userRouter = require('./src/routes/user.router');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/posts', postRouter);
app.use('/users', userRouter);

router = express.Router();

// will redirect all the non-api routes to react frontend
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../client','build','index.html'));
});

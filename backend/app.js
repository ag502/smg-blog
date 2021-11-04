const express = require('express');

const { sequelize } = require('./models');
const cors = require('cors');

const post = require('./router/post');
const comment = require('./router/comment');

const app = express();
const port = 8000;

sequelize.sync();

app.use(cors());
app.use(express.json());

app.use('/', post);
app.use('/', comment);

app.listen(port, () => {
    console.log(`listening at ${port}`);
});

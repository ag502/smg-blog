const express = require('express');

const { sequelize } = require('./models');
const cors = require('cors');

const post = require('./router/post');

const app = express();
const port = 8000;

sequelize.sync();

app.use(cors());

app.use('/', post);

app.listen(port, () => {
    console.log(`listening at ${port}`);
});

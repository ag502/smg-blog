const express = require('express');

const { sequelize } = require('./models');

const app = express();
const port = 8000;

sequelize.sync();

app.listen(port, () => {
    console.log(`listening at ${port}`);
});

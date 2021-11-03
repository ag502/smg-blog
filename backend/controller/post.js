const { sequelize, Sequelize } = require('../models');

const { overview, user } = sequelize.models;

const getEntirePosts = async () => {
    const result = await overview.findAll({
        include: [{ model: user, attributes: [] }],
        attributes: [
            'id',
            'userId',
            [Sequelize.col('user.name'), 'userName'],
            'title',
            'overview',
            'createdAt',
        ],
    });
    return result;
};

module.exports = { getEntirePosts };

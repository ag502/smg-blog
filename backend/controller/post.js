const { convert } = require('html-to-text');
const { sequelize, Sequelize } = require('../models');

const { overview: Overview, user: User, detail: Detail } = sequelize.models;

const getEntirePosts = async () => {
    const result = await Overview.findAll({
        include: [{ model: User, attributes: [] }],
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

const getMyEntirePosts = async () => {
    const result = await Overview.findAll({
        include: [{ model: User, attributes: [] }],
        attributes: [
            'id',
            'userId',
            [Sequelize.col('user.name'), 'userName'],
            'title',
            'overview',
            'createdAt',
        ],
        where: {
            userId: 1,
        },
    });
    return result;
};

const addNewPost = async (title, content) => {
    const overview = convert(content, {
        preserveNewlines: false,
        selectors: [
            { selector: 'a', options: { ignoreHref: true } },
            { selector: 'img', format: 'skip' },
            { selector: 'p', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
            { selector: 'pre', options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
            ...['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((headTag) => ({
                selector: headTag,
                options: { uppercase: false },
            })),
        ],
    }).slice(0, 150);

    const insertOverview = await Overview.create({
        userId: 1,
        title,
        overview,
    });

    await Detail.create({
        postId: insertOverview.id,
        content,
    });
};

module.exports = { getEntirePosts, getMyEntirePosts, addNewPost };

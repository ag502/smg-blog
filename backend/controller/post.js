const { convert } = require('html-to-text');
const { sequelize, Sequelize } = require('../models');

const { overview: Overview, user: User, detail: Detail, comment: Comment } = sequelize.models;

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

const getPost = async (postId) => {
    const postInfo = await Overview.findOne({
        include: [
            { model: Detail, attributes: [] },
            { model: User, attributes: [] },
        ],
        attributes: [
            'id',
            'title',
            [Sequelize.col('user.name'), 'userName'],
            [Sequelize.col('detail.content'), 'content'],
            'createdAt',
        ],
        where: {
            id: postId,
        },
    });

    const commentGroups = await Comment.findAll({
        attributes: [Sequelize.fn('DISTINCT', Sequelize.col('group')), 'group'],
        where: {
            postId,
        },
        order: [['group', 'ASC']],
    });

    const comments = await Promise.all(
        commentGroups.map((curElem) => {
            const curGroup = curElem.dataValues.group;
            const curComments = Comment.findAll({
                include: [{ model: User, attributes: [] }],
                attributes: [
                    'id',
                    [Sequelize.col('user.name'), 'name'],
                    'group',
                    'level',
                    'content',
                    'createdAt',
                ],
                where: {
                    postId,
                    group: curGroup,
                },
            });
            return curComments;
        })
    );

    return { ...postInfo.dataValues, comments };
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

module.exports = { getEntirePosts, getMyEntirePosts, getPost, addNewPost };

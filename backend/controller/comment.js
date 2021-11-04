const { sequelize } = require('../models');

const { comment: Comment } = sequelize.models;

const addComment = async (postId, content) => {
    const insertComment = await Comment.create({
        postId,
        level: 1,
        order: 1,
        userId: 1,
        content,
    });

    await Comment.update({ group: insertComment.id }, { where: { id: insertComment.id } });
};

const addReply = async (postId, parentId, content) => {
    await Comment.create({
        postId,
        level: 2,
        order: 1,
        group: parentId,
        userId: 1,
        content,
    });
};

module.exports = { addComment, addReply };

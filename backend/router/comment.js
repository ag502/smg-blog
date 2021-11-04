const Router = require('express');
const { addComment, addReply } = require('../controller/comment');

const commentRouter = Router();

commentRouter.post('/addcomment/:id', async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    try {
        await addComment(id, content);
        return res.status(200).json({ msg: '등록성공' });
    } catch (error) {
        return res.status(401).json({ msg: '등록실패' });
    }
});

commentRouter.post('/addReply/:id', async (req, res) => {
    const { id } = req.params;
    const { content, parentId } = req.body;

    try {
        await addReply(id, parentId, content);
        return res.status(200).json({ msg: '등록성공' });
    } catch (error) {
        return res.status(401).json({ msg: '등록실패' });
    }
});

module.exports = commentRouter;

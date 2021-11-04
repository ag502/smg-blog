const Router = require('express');
const { getEntirePosts, getMyEntirePosts, addNewPost } = require('../controller/post');

const postRouter = Router();

postRouter.get('/', async (req, res) => {
    try {
        const result = await getEntirePosts();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(401).json({ msg: '조회실패' });
    }
});

postRouter.get('/myposts', async (req, res) => {
    try {
        const result = await getMyEntirePosts();
        console.log(result);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(401).json({ msg: '조회실패' });
    }
});

postRouter.post('/addpost', async (req, res) => {
    const { title, content } = req.body;
    try {
        await addNewPost(title, content);
        return res.status(200).json({ msg: '작성성공' });
    } catch (error) {
        return res.status(401).json({ msg: '작성실패' });
    }
});

module.exports = postRouter;

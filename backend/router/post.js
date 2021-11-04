const Router = require('express');
const {
    getEntirePosts,
    getMyEntirePosts,
    getPost,
    addNewPost,
    updatePost,
    deletePost,
} = require('../controller/post');

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

postRouter.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getPost(id);
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

postRouter.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        await updatePost(id, title, content);
        return res.status(200).json({ msg: '수정성공' });
    } catch (error) {
        return res.status(401).json({ msg: '수정실패' });
    }
});

postRouter.post('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await deletePost(id);
        return res.status(200).json({ msg: '삭제성공' });
    } catch (error) {
        return res.status(401).json({ msg: '삭제실패' });
    }
});

module.exports = postRouter;

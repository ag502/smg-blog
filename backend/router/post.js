const Router = require('express');
const { getEntirePosts } = require('../controller/post');

const postRouter = Router();

postRouter.get('/', async (req, res) => {
    try {
        const result = await getEntirePosts();
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(401).json({ msg: '조회실패' });
    }
});

module.exports = postRouter;

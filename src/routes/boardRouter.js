var router = require('express').Router();
const boardController = require('../controllers/boardController');


router.get('/:challenge_uid/board', boardController.getBoard);
router.get('/:challenge_uid/board/post', boardController.addPostPage);
router.post('/:challenge_uid/board/post', boardController.addPost);
router.get('/:challenge_uid/board/:post_uid', boardController.postDetail);
router.post('/:challenge_uid/board/:post_uid/comment', boardController.addComment);


module.exports = router;
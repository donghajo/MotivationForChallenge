var router = require('express').Router();
const boardController = require('../controllers/boardController');
var multer = require('multer');
var path = require('path');


var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/");
    },
    filename: function(req, file, cb){
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname, ext)+"-"+Date.now()+ext);
    },
});
var upload = multer({storage:storage});

router.get('/:challenge_uid/board', boardController.getBoard);
router.get('/:challenge_uid/board/post', boardController.addPostPage);
router.post('/:challenge_uid/board/post', upload.single('post_image'), boardController.addPost);
router.get('/:challenge_uid/board/:post_uid', boardController.postDetail);
router.post('/:challenge_uid/board/:post_uid/comment', boardController.addComment);


module.exports = router;
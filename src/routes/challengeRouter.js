var router = require('express').Router();
const challengeController = require('../controllers/challengeController');
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




//get page
router.get('/list/:challenge_type', challengeController.getList);
router.get('/list/insert/:challenge_type', challengeController.getInsertChallenge);
router.get('/challenge/:challenge_uid', challengeController.getDetail);

//insert 
router.post('/create', upload.single('image'), challengeController.createChallenge);




//참여
router.get('/challenge/participate/:challenge_uid', challengeController.participate);


module.exports = router;
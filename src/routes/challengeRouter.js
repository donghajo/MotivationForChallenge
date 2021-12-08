var router = require('express').Router();
const challengeController = require('../controllers/challengeController');

//get page
router.get('/list/:challenge_type', challengeController.getList);
router.get('/list/insert/:challenge_type', challengeController.getInsertChallenge);
router.get('/challenge/:challenge_uid', challengeController.getDetail);

//insert 
router.post('/create', challengeController.createChallenge);



//참여
router.get('/challenge/participate/:challenge_uid', challengeController.participate);


module.exports = router;
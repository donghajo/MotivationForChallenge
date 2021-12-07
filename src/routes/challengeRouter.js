var router = require('express').Router();
const challengeController = require('../controllers/challengeController');

//get page
router.get('/list/:category_id', challengeController.getList);
router.get('/list/insert/:category_id', challengeController.getInsertChallenge);
router.get('/challenge/:id', challengeController.getDetail);

//insert 
router.post('/create', challengeController.createChallenge);



//참여



module.exports = router;
var router = require('express').Router();
const boardController = require('../controllers/boardController');


router.get('/:challenge_uid/board', boardController.getBoard);

module.exports = router;

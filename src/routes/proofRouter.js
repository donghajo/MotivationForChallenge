var router = require('express').Router();
const proofController = require('../controllers/proofController');


router.get('/:challenge_uid/proof', proofController.getProof);

module.exports = router;
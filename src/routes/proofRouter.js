var router = require('express').Router();
const proofController = require('../controllers/proofController');


router.get('/:challenge_uid/proof', proofController.getProof);
router.get('/:challenge_uid/proof/insert', proofController.getInsertProof);

router.post('/:challenge_uid/insert', proofController.insertProof);
router.get('/:challenge_uid/:user_uid/proof/permit', proofController.permitProof);
module.exports = router;
var router = require('express').Router();
const proofController = require('../controllers/proofController');
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

router.get('/:challenge_uid/proof', proofController.getProof);
router.get('/:challenge_uid/proof/insert', proofController.getInsertProof);

router.post('/:challenge_uid/insert', upload.single('image'), proofController.insertProof);
router.get('/:challenge_uid/:user_uid/proof/permit', proofController.permitProof);
module.exports = router;
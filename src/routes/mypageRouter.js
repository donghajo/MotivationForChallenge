var router = require('express').Router();
const mypageController = require('../controllers/mypageController');

//get page
router.get('/myInfo/:user_uid', mypageController.myInfoPage);
router.get('/updateMyInfo/:user_uid', mypageController.updateMyInfoPage);
router.get('/challenge/:user_uid', mypageController.challengePage);
router.get('/post/:user_uid', mypageController.postPage);

//update 
router.post('/updateMyInfo/:user_uid', mypageController.updateMyInfo);

//delete
router.get('/deleteMyInfo/:user_uid', mypageController.deleteMyInfo);



module.exports = router;
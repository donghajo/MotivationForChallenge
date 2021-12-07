var router = require('express').Router();
const indexController = require('../controllers/indexController');

//get page
router.get('/', indexController.getMain);

const mypageRouter = require('./mypageRouter')
router.use('/mypage', mypageRouter)



module.exports = router;
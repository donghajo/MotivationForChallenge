var router = require('express').Router();
const indexController = require('../controllers/indexController');


router.get('/', indexController.getMain);

router.get('/list/:category_id', indexController.getList);

module.exports = router;
var router = require('express').Router();
const indexController = require('../controllers/indexController');


router.get('/', indexController.getMain);



module.exports = router;
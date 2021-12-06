var router = require('express').Router();
const indexController = require('../controllers/indexController');

//get page
router.get('/', indexController.getMain);





module.exports = router;
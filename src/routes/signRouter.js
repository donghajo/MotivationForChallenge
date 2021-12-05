var router = require('express').Router();
const signController = require('../controllers/signController');

//페이지불러오기
router.get('/signin', signController.getSignIn);
router.get('/signup', signController.getSignUp);

//회원가입
router.post('/signup/post', signController.signUp);


//로그인
router.post('/signin/post', signController.signIn);

//로그아웃
router.get('/signout', signController.signOut);

module.exports = router;
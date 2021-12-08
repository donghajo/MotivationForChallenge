const signService = require('../services/signService');

//페이지 불러오기
exports.getSignIn = async(req, res) =>{
    const session = req.session.user_id;
    return res.render('index', {
        session:session,
        pages : 'signin'
    });
}
exports.getSignUp = async(req, res) =>{
    const session = req.session.user_id;
    return res.render('index', {
        session:session,
        pages : 'signup'
    });
}


//회원가입
exports.signUp = async(req, res) =>{
    const {name, id, pw, check_pw, email,interest} = req.body;
    try{
        if(pw!=check_pw){
            res.send('<script type="text/javascript">alert("비밀번호를 확인해주세요."); location.href="/signup";</script>');
        }else{
            signService.signUp([id, pw, name, email, interest]);
        }
        return res.redirect('/signin');
    }catch(err){
        res.send('<script type="text/javascript">alert("이미 사용중인 아이디 입니다."); document.location.href="/signup";</script>');
        return res.status(500).json(err)
    }
}

// 로그인
exports.signIn = async(req, res) =>{
    const {id, pw} = req.body;
    try{
        const user = await signService.signIn([id, pw]);
        req.session.user_uid = user[0].user_uid;
        return res.redirect('/');
    }catch(err){
        res.send('<script type="text/javascript">alert("아이디 또는 비밀번호를 확인해주세요"); location.href="/signin";</script>');
    }
}



//로그아웃
exports.signOut = async(req, res) =>{
    try{
        if(req.session){
            req.session.destroy(function(){
                res.redirect('/signin');
            });
        }
    }catch(err){
        return res.status(500).json(err);
    }
}
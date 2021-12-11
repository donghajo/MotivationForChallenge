const challengeService = require('../services/challengeService');


//리스트 조회
exports.getList = async(req, res)=> {
    const challenge_type = req.params.challenge_type;
    const session = req.session.user_uid;
    try{
        const rows = await challengeService.getList([challenge_type]);
        return res.render('index',{
            session:session,
            rows:rows,
            challenge_type:challenge_type,
            pages: 'listChallenge'
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

//챌린지 개설 페이지
exports.getInsertChallenge = async(req, res) => {
    const challenge_type = req.params.challenge_type;
    const session = req.session.user_uid;
    try{
        return res.render('index', {
           session:session,
           challenge_type:challenge_type,
           pages : 'insertChallenge' 
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

//글 상세 조회
exports.getDetail = async(req, res) => {
    const session = req.session.user_uid;
    const challenge = req.params.challenge_uid;
    try{
        const detail = await challengeService.getChallenge([challenge]);
        console.log(detail[0].challenge_image);
        return res.render('index',{
            session:session,
            detail:detail,
            pages:'detailChallenge'
        })
    }catch(err){
        return res.status(500).json(err);
    }
}


//챌린지 생성
exports.createChallenge = async(req, res) => {
    const session = req.session.user_uid;
    const {name, start_date, end_date, content, proof, type} = req.body;
    const image =`${req.file.filename}`;
    const participation_date = new Date();
    try{
        if(!session){
            return res.send('<script type="text/javascript">alert("회원만 생성가능합니다."); location.href="/signin";</script>');
        }
        await challengeService.createChallenge([type, name, session, start_date, end_date, content, proof, participation_date, image]);
        const challenge_name = await challengeService.getChallengeId([participation_date]);
        await challengeService.participate([challenge_name[0].challenge_uid, session, participation_date]);
        return res.redirect('/list/'+type);
    }catch(err){
        return res.status(500).json(err);
    }
}


exports.participate = async(req, res) => {
    const session = req.session.user_uid;
    const challenge_uid = req.params.challenge_uid;
    const participation_date = new Date();
    try{
        const exis = await challengeService.existence([challenge_uid,session]);
        if(!exis[0]){
            await challengeService.participate([challenge_uid, session, participation_date]);
            return res.redirect('/challenge/'+challenge_uid);
        }else{
            return res.send('<script type="text/javascript">alert("이미 참여중이거나 회원이 아닙니다."); location.href="/";</script>');
        }
    }catch(err){
        return res.status(500).json(err);
    }
}
const challengeService = require('../services/challengeService');


//리스트 조회
exports.getList = async(req, res)=> {
    const challenge_type = req.params.challenge_type;
    const session = req.session.user_uid;
    try{
        const rows = await challengeService.getList([challenge_type]);
        return res.render('listChallenge',{
            session:session,
            rows:rows,
            challenge_type:challenge_type
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

//챌린지 개설 페이지
exports.getInsertChallenge = async(req, res) => {
    const challenge_type = req.params.challenge_type;
    const session = req.session.user_id;
    try{
        return res.render('insertChallenge', {
           session:session,
           challenge_type:challenge_type 
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
        return res.render('detailChallenge',{
            session:session,
            detail:detail
        })
    }catch(err){
        return res.status(500).json(err);
    }
}


//챌린지 생성
exports.createChallenge = async(req, res) => {
    const session = req.session.user_uid;
    const {name, start_date, end_date, content, proof, type, image} = req.body;
    const participation_date = new Date();
    try{
        await challengeService.createChallenge([type, name, session, start_date, end_date, content, proof, participation_date, image]);
        const challenge_name = await challengeService.getChallengeId([participation_date]);
        await challengeService.participate([challenge_name[0].challenge_uid, session, participation_date]);
        return res.redirect('/list/'+type);
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

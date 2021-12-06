const challengeService = require('../services/challengeService');



exports.getList = async(req, res)=> {
    const category_id = req.params.category_id;
    const session = req.session.user_id;
    const nickname = req.session.nickname;
    try{
        const rows = await challengeService.getList([category_id]);
        return res.render('listChallenge',{
            session:session,
            nickname:nickname,
            rows:rows,
            category_id:category_id
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getInsertChallenge = async(req, res) => {
    const category_id = req.params.category_id;
    const session = req.session.user_id;
    const nickname = req.session.nickname;
    try{
        return res.render('insertChallenge', {
           session:session,
           nickname:nickname,
           category_id:category_id 
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.getDetail = async(req, res) => {
    const session = req.session.user_id;
    const challenge = req.params;
    try{
        const detail = await challengeService.getChallenge([challenge.id]);
        return res.render('detailChallenge',{
            session:session,
            detail:detail
        })
    }catch(err){
        return res.status(500).json(err);
    }
}


//insert
exports.createChallenge = async(req, res) => {
    const session = req.session.user_id;
    const category_id = req.params.category_id;
    const {name, start_date, end_date, content, proof, type, image} = req.body;
    const participation_date = new Date();
    try{
        await challengeService.createChallenge([type, name, session, start_date, end_date, content, proof, participation_date, image]);
        const challenge_name = await challengeService.getChallengeId([participation_date]);
        await challengeService.participate([session, challenge_name[0].id, participation_date]);
        return res.redirect('/list/'+type);
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
}

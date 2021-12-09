const proofService = require('../services/proofService');
const challengeService =require('../services/challengeService');


exports.getProof = async(req, res) => {
    const session = req.session.user_uid;
    const challenge_uid = req.params.challenge_uid;
    try{
        const rows = await proofService.getProof([challenge_uid]);
        const challenge = await challengeService.getChallenge([challenge_uid]);
        console.log(challenge[0].challenge_creator);
        return res.render('proof', {
            session: session,
            challenge_uid:challenge_uid,
            rows:rows,
            challenge:challenge[0].challenge_creator
        });
    }catch(err){
        return res.status(500).json(err);
    }
}


exports.getInsertProof = async(req, res) => {
    const session = req.session.user_uid;
    const challenge_uid = req.params.challenge_uid;
    try{
        return res.render('insertProof', {
            session: session,
            challenge_uid: challenge_uid
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.insertProof = async(req, res) => {
    const challenge_uid = req.params.challenge_uid;
    const session = req.session.user_uid;
    const {content} = req.body;
    const image =`${req.file.filename}`;
    const now = new Date();
    try{
        if(!session){
            return res.send('<script type="text/javascript">alert("로그인을 해주세요"); location.href="/signin";</script>');
        }
        const exis = await challengeService.existence([challenge_uid,session]);
        if(!exis[0]){
            await proofService.insertProof([content,now,image,challenge_uid,session]);
            return res.redirect('/challenge/'+challenge_uid+'/proof');
        }else{
            return res.send('<script type="text/javascript">alert("해당 챌린지에 참여한 회원만 등록 가능합니다."); location.href="/";</script>');
        }
    }catch(err){
        
        return res.status(500).json(err);
    }
}

exports.permitProof = async(req, res)=> {
    const {challenge_uid, user_uid} = req.params;
    try{
        await proofService.permitProof([challenge_uid, user_uid]);
        return res.redirect('/challenge/'+challenge_uid+'/proof');
    }catch(err){
        return res.status(500).json(err);
    }
}
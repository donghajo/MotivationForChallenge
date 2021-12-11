const indexService = require('../services/indexService');
const challengeService = require('../services/challengeService');
//get page
exports.getMain = async(req, res) =>{
    try{
        const challenge = [];
        const session = req.session.user_uid;
        const challenger = await indexService.getMyChallenge([session]);
        for(var i = 0; i < challenger.length; i++){
            challenge.push(await challengeService.getChallenge([challenger[i].challenge_uid]));
        }
        
        console.log(challenge);  
        return res.render('index',{
            session:session,
            pages: 'category',
            challenge:challenge
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

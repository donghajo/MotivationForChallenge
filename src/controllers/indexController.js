const indexService = require('../services/indexService');

//get page
exports.getMain = async(req, res) =>{
    try{
        const session = req.session.user_uid;
        const challenge = await indexService.getMyChallenge([session]); 
        console.log(challenge.length);  
        return res.render('index',{
            session:session,
            pages: 'category',
            challenge:challenge
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

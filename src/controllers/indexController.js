const indexService = require('../services/indexService');
const mypageService = require('../services/mypageService');
//get page
exports.getMain = async(req, res) =>{
    try{
        const session = req.session.user_uid;
        const challenge = await mypageService.pcList([session]);
        
        return res.render('index',{
            session:session,
            pages: 'category',
            challenge:challenge
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

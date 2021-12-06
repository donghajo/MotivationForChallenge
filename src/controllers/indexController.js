const indexService = require('../services/indexService');

exports.getMain = async(req, res) =>{
    try{
        const session = req.session.user_id;
        const nickname = req.session.nickname;
        return res.render('category',{
            session:session,
            nickname:nickname
        });
    }catch(err){
        return res.status(500).json(err);
    }
}


exports.getList = async(req, res)=> {
    const category_id = req.params.category_id;
    const session = req.session.user_id;
    const nickname = req.session.nickname;
    try{
        const rows = indexService.getList([category_id]);
        return res.render('listChallenge',{
            session:session,
            nickname:nickname,
            rows:rows
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

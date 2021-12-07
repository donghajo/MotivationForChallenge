//get page
exports.getMain = async(req, res) =>{
    try{
        const session = req.session.user_id;
        const nickname = req.session.nickname;
        return res.render('index',{
            session:session,
            nickname:nickname,
            pages : 'category'
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

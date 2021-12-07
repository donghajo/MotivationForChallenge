//get page
exports.getMain = async(req, res) =>{
    try{
        const session = req.session.user_id;
        const nickname = req.session.nickname;
        console.log(session);
        return res.render('category',{
            session:session,
            nickname:nickname
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

//get page
exports.getMain = async(req, res) =>{
    try{
        const session = req.session.user_uid;
        console.log(session);
        return res.render('category',{
            session:session
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

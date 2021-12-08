const mypageService = require('../services/mypageService');

exports.myInfoPage = async (req, res) => {

    const { user_uid } = req.params

    try {
        let user_info = await mypageService.myInfo(user_uid)
        let session = req.session.user_uid
        return res.render('index1', {
            session:session, 
            user_info:user_info,
            pages : 'mypage'
        })
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.updateMyInfoPage = async (req, res) => {

    const { user_uid } = req.params

    try {
        let user_info = await mypageService.myInfo(user_uid)
        let session = req.session.user_uid
        return res.render('index1', {
            session:session, 
            user_info:user_info,
            pages : 'myinfo'
        })
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.challengePage = async (req, res) => {

    const { user_uid } = req.params

    try {
        let pc_info = await mypageService.pcList(user_uid)
        let cc_info = await mypageService.ccList(user_uid)
        let session = req.session.user_uid
        return res.render('index1', {
            session:session, 
            pc_info:pc_info,
            cc_info:cc_info,
            pages : 'mypageChallenge'
        })
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.postPage = async (req, res) => {

    const { user_uid } = req.params

    try {
        let post_info = await mypageService.postList(user_uid)
        let session = req.session.user_uid
        return res.render('index1', {
            session:session, 
            post_info:post_info,
            pages : 'board'
        })
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.updateMyInfo = async (req, res) => {

    const { user_uid } = req.params
    const { email, interest } = req.body

    try {
        await mypageService.updateMyInfo(email, interest, user_uid)
        return res.redirect('/mypage/myInfo/'+req.session.user_uid)
    }

    catch(error) {
        return res.status(500).json(error)
    }

}

exports.deleteMyInfo = async (req, res) => {
    
    const { user_uid } = req.params
    
    try{
        await mypageService.deleteMyInfo(user_uid)
        //세션삭제 추가
        return res.redirect('/')
    }
    
    catch (error) {
        return res.status(500).json(error)
    }

}
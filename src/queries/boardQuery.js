exports.getBoard = 'select * from post where challenge_uid=?'
exports.addPost = 'insert into post(post_title, post_content, post_image, post_create_date, challenge_uid, user_uid) values(?, ?, ?, ?, ?, ?)'
exports.postDetail = 'select * from post where challenge_uid=? and post_uid=?'
exports.addComment = 'insert into comment(comment_content, comment_create_date, post_uid, user_uid) values(?,?,?,?)'
exports.getComment = 'select * from comment where post_uid=?';
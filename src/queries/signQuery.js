exports.signUp = 'insert into user values(?, ?, ?, ?, ?)';
exports.signIn = 'select * from user where user_uid=? and password=?';
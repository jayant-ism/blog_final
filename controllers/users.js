const User = require('../models/Users');

exports.postRegisterUser = (req, res, next) => {
    const userName = req.body.userName;
    const password = req.body.password;

    const user = new User(userName, password);
    user.save();
    res.redirect('/login');
}

exports.getLoginUser = (req, res, next) => {
    const userName = req.body.userName;
    const password = req.body.password;

    User.findByName(userName, user => {
        if(!user){
            res.redirect('/register')
        }else{
            if(password === user.password){
                res.redirect('/campgrounds');
            }
            else {
                res.redirect('/login');
            }
        }
    })
}
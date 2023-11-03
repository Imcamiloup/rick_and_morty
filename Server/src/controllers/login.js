const users = require('../utils/users');

exports.login =  (req, res) => {

    const {email, password} = req.query;

    let user = users.find((user) => user.email === email && user.password === password);
    
    user ?
    res.status(200).json({acces: true , message: 'User logged in'})
    : res.status(404).json({acces: false, message: 'User not found'})

}

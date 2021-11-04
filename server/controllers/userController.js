const User = require('../models/User');
const bcryptjs = require('bcryptjs');

exports.createUser = async (req, res) => {

    //get email and password
    const { email, password } = req.body;



    try {
        let user = await User.findOne({ email });

        if(user){
            return res.status(400).json({ msg : 'user already exist'})
        };
        //create new user
        user = new User(req.body);
        //Hash the password
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);
        //save the user
        await user.save();
        res.json({ msg : 'user created'});
    } catch (error) {
        console.log(error)
        res.status(218).send('fatal error');
    }
}
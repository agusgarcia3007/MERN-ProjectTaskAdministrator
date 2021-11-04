const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

//create an user
// /api/users
router.post('/',
    [
        check('email', 'email is not valid').isEmail(),
        check('password', 'Use 6 or more characters').isLength({ min : 6}),
    ],
);
module.exports = router;
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/authMiddle')

//create an user
// /api/users
router.post('/',
    [
        check('email', 'email is not valid').isEmail(),
        check('password', 'Use 6 or more characters').isLength({ min : 6}),
    ],
    authController.authUser
);

router.get('/',
    auth,
    authController.authenticatedUser
)
module.exports = router;
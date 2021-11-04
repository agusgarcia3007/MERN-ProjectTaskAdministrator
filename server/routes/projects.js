const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// /api/projects
//create a project
router.post('/',
    projectController.createProject
);


module.exports = router;
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/authMiddle');
const { check } = require('express-validator')

// /api/projects

//create a project
router.post('/',
    auth,
    [
        check('name', 'project name required').not().isEmpty()
    ],
    projectController.createProject
);
//get owner's projects
router.get('/',
    auth,
    projectController.getProjects
);

//update project by ID
router.put('/:id',
    auth,
    [
        check('name', 'project name required').not().isEmpty()
    ],
    projectController.updateProject
)


module.exports = router;
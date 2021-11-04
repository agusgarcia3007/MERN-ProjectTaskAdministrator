const Project = require('../models/Project');


exports.createProject = async (req, res) => {

    try {
        //create new project
    const project = new Project(req.body);
    project.save();
    res.json(project); 

    } catch (error) {
        console.log(error);
        res.send(500).send('error');
    }
}
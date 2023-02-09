const express = require('express')
const router = express.Router();
const TaskBL = require('../models/taskBL')


router.route('/')
    .get(async function(req, resp)
    {
        let data =  await TaskBL.getAllTasks();
        return resp.json(data.Tasks)
    })

    router.route('/:id')
    .get(async function(req, resp)
    {
       let id =  req.params.id;
       let data =  await TaskBL.getTasksByUserId(id);
       return resp.json(data.Tasks)
    })

    router.route('/:id')
    .post(async function(req, resp)
    {
        let task =  req.body;
        let id = req.params.id;
        let status =  await TaskBL.addNewTask(id,task);
        return resp.json(status)
    })

    router.route('/:id')
    .put(async function(req, resp)
    {
        let task =  req.body;
        let id = req.params.id;
        let status =  await TaskBL.updateTask(id,task);
        return resp.json(status)
    })

    router.route('/:id')
    .delete(async function(req, resp)
    {
        let task =  req.body;
        let id = req.params.id;
        let status =  await TaskBL.deleteTask(id,task);
        return resp.json(status)
    })

    


    module.exports = router;
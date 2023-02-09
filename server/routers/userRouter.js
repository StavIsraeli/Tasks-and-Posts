const express = require('express')
const router = express.Router();
const UserBL = require('../models/userBL')


router.route('/')
    .get(async function(req, resp)
    {
        let data =  await UserBL.getAllUsers();
        return resp.json(data)
    })

router.route('/:id')
    .get(async function(req, resp)
    {
       let id =  req.params.id;
       let data =  await UserBL.getUser(id);
       return resp.json(data)
    })

router.route('/')
    .post(async function(req, resp)
    {
       let obj =  req.body;
       let status =  await UserBL.addUser(obj);
       return resp.json(status)
    })

router.route('/:id')
    .put(async function(req, resp)
    {
       let obj =  req.body;
       let id = req.params.id;
       let status =  await UserBL.updateUser(id,obj);
       return resp.json(status)
    })

router.route('/:id')
    .delete(async function(req, resp)
    {
       let id = req.params.id;
       let status =  await UserBL.deleteUser(id);
       return resp.json(status)
    })

module.exports = router;
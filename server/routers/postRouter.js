const express = require('express')
const router = express.Router();
const PostBL = require('../models/postBL')


router.route('/')
    .get(async function(req, resp)
    {
        let data =  await PostBL.getAllPosts();
        return resp.json(data.Posts)
    })

    router.route('/:id')
    .get(async function(req, resp)
    {
       let id =  req.params.id;
       let data =  await PostBL.getPostsByUserId(id);
       return resp.json(data.Posts)
    })

    router.route('/:id')
    .post(async function(req, resp)
    {
        let post =  req.body;
        let id = req.params.id;
        let status =  await PostBL.addNewPost(id,post);
        return resp.json(status)
    })

    router.route('/:id')
    .put(async function(req, resp)
    {
        let post =  req.body;
        let id = req.params.id;
        let status =  await PostBL.updatePost(id,post);
        return resp.json(status)
    })

    router.route('/:id')
    .delete(async function(req, resp)
    {
        let post =  req.body;
        let id = req.params.id;
        let status =  await PostBL.deletePost(id,post);
        return resp.json(status)
    })

    


    module.exports = router;
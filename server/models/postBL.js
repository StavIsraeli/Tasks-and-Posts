const User = require('./userModel')

const getAllPosts = () =>
{
    return new Promise((resolve,reject) =>
    {
        User.find({},{Posts:1}, function(err, data)
        {
            if(err)
            {
               reject(err)
            }
            else
            {
                 resolve(data);
            }
        })
    })
}

const getPostsByUserId = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        User.findById(id,{Posts:1, _id: 0}, function(err, data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
} 


const addNewPost = (userid, post) =>
{
    return new Promise((resolve, reject) =>
    {
       
        
        User.findByIdAndUpdate(userid,
            {"$push": {Posts : [{
                Title : post.Title,
                Body : post.Body,
            }]
        }},
             function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve("added new post!");
                }
            })

    })
        
}
    

const updatePost= (userid,post) =>
{
    return new Promise((resolve, reject) =>
    {

        User.updateOne(
            {_id : userid, "Posts._id" : post._id},
            {"$set": {"Posts.$" : {
                Title : post.Title,
                Body : post.Body,
            }
        }},
             function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve("update post!");
                }
            })
    })
}


const deletePost = (userid, post) =>
{
    return new Promise((resolve, reject) =>
    {

        User.updateOne(
            {_id : userid},
            {"$pull": {Posts:{ "Posts._id" : post._id} }},
             function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve("post deleted!");
                }
            })
    })
}




module.exports = {getAllPosts,getPostsByUserId,addNewPost,updatePost,deletePost}
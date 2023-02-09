const User = require('./userModel')

const getAllTasks = () =>
{
    return new Promise((resolve,reject) =>
    {
        User.find({},{Tasks:1}, function(err, data)
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

const getTasksByUserId = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        User.findById(id,{Tasks:1, _id: 0}, function(err, data)
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


const addNewTask = (userid, task) =>
{
    return new Promise((resolve, reject) =>
    {
       //task._id=ObjectId()
        
        User.findByIdAndUpdate(userid,
            {"$push": {Tasks : [
                {
                    Title : task.Title,
                    Completed : task.Completed,
                }
            ]}},
             function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve("added new task!");
                }
            })

    })
        
}
    

const updateTask= (userid,task) =>
{
    return new Promise((resolve, reject) =>
    {

        User.updateOne(
            {_id : userid, "Tasks._id" : task._id},
            {"$set": {"Tasks.$" : {
                Title : task.Title,
                Completed : task.Completed,
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
                    resolve("update task!");
                }
            })
    })
}


const deleteTask = (userid, task) =>
{
    return new Promise((resolve, reject) =>
    {

        User.updateOne(
            {_id : userid},
            {"$pull": {Tasks:{ "Tasks._id" : task._id} }},
             function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve("task deleted!");
                }
            })
    })
}




module.exports = {getAllTasks,getTasksByUserId,addNewTask,updateTask,deleteTask}
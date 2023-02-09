const mongoose = require('mongoose');
let UserSchema = new mongoose.Schema(
    {
        Name : String,
        Email : String,
        Street : String,
        City : String,
        Zipcode : String,
        Tasks : [ 
            {
                
                Title : String,
                Completed : Boolean
            }
        ],
        Posts : [ 
            {
                
                Title : String,
                Body : String
            }
        ]
    }
)

module.exports = mongoose.model('users', UserSchema)
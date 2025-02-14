const mongoose = require("mongoose"); // Import Mongoose

const userSchema = new  mongoose.Schema(
    {
        firstName: {
            type: String
        },
        lastName:{
            type: String
        },
        emailId:{
            type: String
        },
        password:{
            type: String
        },
        age:{
            type: Number
        },
        gender:{
            type: String
        }

    }
);

//create a mongoose model(user model)
//const User = ("user",userSchema);
//module.exports = User;
module.exports = mongoose.model("User",userSchema)

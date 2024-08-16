

import mongoose from "mongoose";


// Schema for the User Collection in MongoDB

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})


const UserModel = mongoose.model("Users", UserSchema)

export default UserModel

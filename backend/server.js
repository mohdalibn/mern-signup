
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserModel from './models/User.js';


const app = express()
const port = 3400

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


mongoose.connect("mongodb://localhost:27017/mern-signup-login")


// POST request for user signup
app.post("/signup", (req, res) => {

    UserModel.create(req.body).then(Users => res.json(Users)).catch(err => res.json(err))

})

app.post("/login", async (req, res) => {

    const {email, password} = req.body;

    try{
        
        const user = await UserModel.findOne({email: email})

        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        if(user.password !== password){
            return res.status(404).json({message: "Password is incorrect"})
        }

        return res.json({message: "Login Successful!"})

    }
    catch(err){
        return res.status(500).json({message: "Internal Serval Error", error: err})
    }   

})

// POST request for user login
app.post("/login")

app.listen(port, () => {console.log(`The Server is Listening on port ${port} at http://localhost:${port}`)})
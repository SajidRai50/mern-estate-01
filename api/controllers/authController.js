import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';


export const signup =async (req,res)=>{
 const {username,email,password} =req.body;
 const hashedPassword = bcrypt.hashSync(password,10);
 console.log(req.body)
 const newUser = new User({username,email,password:hashedPassword});
 try {
  await newUser.save();
 res.status(201).json("user creater successfull")
 } catch (error) {
 res.status(500).json(error.message)
 }

}
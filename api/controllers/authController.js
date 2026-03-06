import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";


export const signup =async (req,res,next)=>{
 const {username,email,password} =req.body;
 const hashedPassword = bcrypt.hashSync(password,10);
 console.log(req.body,'authController req.body')
 const newUser = new User({username,email,password:hashedPassword});
 try {
  await newUser.save();
 res.status(201).json("user creater successfull")
 } catch (error) {
 next(error);
 }

}
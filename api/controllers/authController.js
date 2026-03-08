import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import errorHandler from '../utils/error.js';
import jwt from "jsonwebtoken";


   //..........signUP............

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(req.body, "authController req.body");
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user creater successfull");
  } catch (error) {
    next(error);
  }
};
  //..........signIN............
export const signin = async (req, res, next) => {
     const {  email, password } = req.body;

  try {

    const validUser =await User.findOne({email});
    if(!validUser){
        return next( errorHandler(404, 'user not found!!'))
    }
    const vailPassword =bcrypt.compareSync(password,validUser.password)
    if(!vailPassword){
        return next(errorHandler(401,'Invalid Password!!'))
    };
    const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET);
    res.cookie('access_token', token, {httpOnly:true ,expires : new Date(Date.now() +24* 60*60*1000)} )
    .status(200)
    .json({user:validUser.username,id:validUser._id});

console.log(token,'login Sucessfully ');

  } catch (error) {
    next(error);
  }
};
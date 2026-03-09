
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    avatar:{
        type :String,
        default :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIQcaz_645QFMOXaRzoqBPX8dnuxEhHqMuBA&s"
    }
},
{
    timestamps: true
}
);

const User = mongoose.model("User", userSchema);

export default User;
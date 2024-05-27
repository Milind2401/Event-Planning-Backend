import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required!"],
        minLength:[3,"Name must contain at least 3 character"],
    },
    email:{
        type:String,
        required:[true,"Email Required!"],
        validate:[validator.isEmail,"Please Provide valid email"],
    },
    subject:{
        type:String,
        required:[true,"Subject Required!"],
        minLength:[5,"Subject must contain at least 5 character"],
    },
    message:{
        type:String,
        required:[true,"Message Required!"],
        minLength:[20,"Message must contain at least 20 character"],
    }
});

export const Message=mongoose.model("Message",messageSchema);
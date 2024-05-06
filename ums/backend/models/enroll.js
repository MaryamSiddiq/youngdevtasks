import mongoose from "mongoose";

const schema=mongoose.Schema({
    title: { type: String, required: true },
    code: { type: String, required: true },
    username:{type:String,required:true},
    instructor:{
        type:String, required:true
    },
})

export default mongoose.model("enroll",schema)
import mongoose from "mongoose";

const newschema=mongoose.Schema({
    title: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    instructor:{
        type:String, required:true
    },
    capacity:{type:Number, required:true}
})
export default mongoose.model("course",newschema);
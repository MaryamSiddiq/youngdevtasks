import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    pic: { type: String, required: true},
    dname: { type: String, required: true, unique: true },
    message: { type: String, required: true }
});

export default mongoose.model('department',departmentSchema);
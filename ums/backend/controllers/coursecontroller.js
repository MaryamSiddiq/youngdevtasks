import enroll from '../models/enroll.js'
import courses from "../models/courses.js";


 export const createcourse = async (req, res) => {
    try {
        const userdata = new courses(req.body);
       /* const {email}=userdata;
        const userExist=await User.findOne();
        if(userExist){
            return res.status(404).json({ msg: "user already exists" })
        }*/
        if (!userdata) {
            return res.status(404).json({ msg: "data not found" })
        }
        const saveddata = await userdata.save();
        res.status(200).json("successfull");
    } catch (error) {
        res.status(400).json({ error: error });
    }
}


export const fetchcourse = async (req, res) => {
    try {
        const usersd=await courses.find();
        if(usersd.length==0){
           return res.status(400).json({ error: "Data not found" })
        }
        res.status(200).json(usersd);
    } catch (error) {
        res.status(400).json({ error: "internal error" })
    }

}

export const enrollcourse = async (req, res) => {
    try {
        const userdata = new enroll(req.body);
       /* const {email}=userdata;
        const userExist=await User.findOne();
        if(userExist){
            return res.status(404).json({ msg: "user already exists" })
        }*/
        if (!userdata) {
            return res.status(404).json({ msg: "data not found" })
        }
        const saveddata = await userdata.save();
        res.status(200).json("successfull");
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export const fetchenrollcourse = async (req, res) => {
    try {
        const usersd=await enroll.find();
        if(usersd.length==0){
           return res.status(400).json({ error: "Data not found" })
        }
        res.status(200).json(usersd);
    } catch (error) {
        res.status(400).json({ error: "internal error" })
    }

}


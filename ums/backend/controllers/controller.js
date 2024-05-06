import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import User from '../models/model.js'
import departmentmodel from "../models/departmentmodel.js";
export const signup = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword, role });
        await user.save();
        res.status(201).send('User created successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user');
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).send('Invalid email');
            return;
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            res.status(401).send('Invalid password');
            return;
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, 'secret_key');


        if (user.role === 'admin') {
            console.log("admin")
            res.json('Admin');
        }
        else if (user.role === 'user') {
            console.log("user")
            res.json('User');
        }
        // If the user is admin, send the token

    } catch (error) {
        console.error(error);
        res.status(500).send('Error logging in');
    }
};

export const fetch = async (req, res) => {
    try {
        const usersd=await departmentmodel.find();
        if(usersd.length==0){
           return res.status(400).json({ error: "Data not found" })
        }
        res.status(200).json(usersd);
    } catch (error) {
        res.status(400).json({ error: "internal error" })
    }

}
export const getone = async (req, res) => {
    try {
      const id=req.params.id;
      const userExsit=await departmentmodel.findById(id);
      if(!userExsit){
        return res.status(400).json({ error: "USER NOT FOUND" })
      }
      res.status(200).json(userExsit);
    } catch (error) {
        res.status(400).json({ error: "internal error" })
    }

}
export const create = async (req, res) => {
    try {
        const userdata = new departmentmodel(req.body);
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

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        
        // Check if the user exists
        const userExists = await departmentmodel.findById(id);
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }
        
        // Update the user data
        const updatedData = await departmentmodel.findByIdAndUpdate(id, req.body, { new: true });
        
        // Check if the update was successful
        if (!updatedData) {
            return res.status(400).json({ error: "Failed to update user data" });
        }
        
        // Return the updated user data
        res.status(200).json(updatedData);
    } catch (error) {
        // Handle any internal errors
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
export const deleteuser =async(req,res)=>{
    try{
        const id = req.params.id; 
        // Check if the user exists
        const userExists = await departmentmodel.findById(id);
        if (!userExists) {
            return res.status(404).json({ error: "User not found" });
        }
        await User.findByIdAndDelete(id);
        res.status(404).json({ error: "Delete successfully" })

    }catch(error){

    }
}
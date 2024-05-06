import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import User from '../models/model.js'

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



export const fetch = async (req, res) => {
    try {
        const usersd = await departmentmodel.find();
        if (usersd.length == 0) {
            return res.status(400).json({ error: "Data not found" })
        }
        res.status(200).json(usersd);
    } catch (error) {
        res.status(400).json({ error: "internal error" })
    }

}

export const login = async (req, res) => {
    const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        return res.json('Login successful');
      } else {
        return res.status(401).json({ message: "Password does not match" });
      }
    } else {
      return res.status(404).json({ message: "No user registered with this email" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
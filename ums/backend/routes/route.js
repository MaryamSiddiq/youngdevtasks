import express from "express"
import { signup, login } from '../controllers/controller.js';
import { fetch,getone,deleteuser,update,create } from "../controllers/controller.js";
import {createcourse,enrollcourse,fetchcourse, fetchenrollcourse} from "../controllers/coursecontroller.js";
import enroll from "../models/enroll.js";


const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.post('/createdepartment',create);
router.post('/fetch',fetch);

router.post('/addcourse',createcourse);
router.post('/fetchcourses',fetchcourse);

router.post('/enroll',enrollcourse);
router.post('/fetchenroll',fetchenrollcourse)
export default  router;

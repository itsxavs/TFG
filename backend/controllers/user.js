import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/user.js';
import Student from '../models/student.js';
import Teacher from '../models/teacher.js';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(404).json({ massage: " User doesn't exist." });
    const isPassword = await bcrypt.compare(password, existingUser.password);
    if (!isPassword) return res.status(404).json({ message: " Password isn't correct" });
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });
    let userRole = await Teacher.findOne({ id: existingUser._id });
    if (!userRole) userRole = await Student.findOne({ id: existingUser._id });
    res.status(200).json({ result: existingUser, token, userRole });
  } catch (error) {}
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, teacher } = req.body;
  /*  email = JSON.parse(email); */

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) return res.status(400).json({ message: 'User already exists' });

    req.body.password = await bcrypt.hash(password, 12);

    const result = new User(req.body);
    await result.save();
    // HASTA AQUI SE CREA EL USUARIO
    // AHORA A VER SI ES STUDENT OR TEACHER
    debugger;
    let userRole;
    if (teacher) {
      userRole = new Teacher({ id: result._id, name: firstName, logo: '', type: 'Teacher' });
    } else {
      userRole = new Student({ id: result._id, name: firstName, teacherId: null, logo: '', type: 'Student' });
    }
    await userRole.save();

    const token = jwt.sign({ email: result.email, id: result._id }, 'secret', { expiresIn: '1h' });

    res.status(201).json({ result, userRole, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  debugger;
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

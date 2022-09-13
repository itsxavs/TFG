import Teacher from '../models/teacher.js';

export const getAllTeacher = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

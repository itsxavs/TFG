import mongoose from 'mongoose';

const teacherSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: String,
  studentsId: {
    type: Array,
    ref: 'Student',
  },
  logo: {
    data: Buffer,
    contentType: String,
  },
  type: String,
});

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;

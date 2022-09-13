import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: String,
  classroom: String,
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
  },
  words: Array,
  logo: {
    data: Buffer,
    contentType: String,
  },
  type: String,
});

const Student = mongoose.model('Student', studentSchema);
export default Student;

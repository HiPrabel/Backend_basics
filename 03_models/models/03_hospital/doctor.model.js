import mongoose, { mongo } from 'mongoose'

const working = new mongoose.Schema({
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  }
})

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    default: 0,
  },
  practiceInHospital: [working],
  
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)
import mongoose from "mongoose";
const medical_recordSchema = mongoose.Schema({}, { timestamps: true })
export const Medical_record = mongoose.model("Midical_record", medical_recordSchema)
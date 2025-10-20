import mongoose, { Schema } from "mongoose";
const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address_Line1: {
        type: String,
        required: true
    },
    address_Line2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    pinecode: {
        type: String,
        required: true
    },
    spactialisedIn: [
        {
            type: String,
            required: true
        }
    ]

}, { timeseries: true })
export const Hospital = mongoose.model("Hospital", hospitalSchema)
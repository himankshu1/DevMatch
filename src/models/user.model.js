import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        age: {
            type: Number,
        },
        gender: {
            type: String,
        },
    },
    { timestamps: true }
);

export const User = new mongoose.model("User", userSchema);

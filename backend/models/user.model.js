import { time, timeStamp } from 'console'
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        name: {
            type: String,
            trim: true,
            default: '',
        },
        profileUrl: {
            type: String,
            default: '',
            required: true,
        },
        avatarUrl: {
            type: String,
        },
        likedProfiles: {
            type: [String],
            default: [],
        },
        likedBy: [
            {
                username: {
                    type: String,
                    required: true,
                },
                avatarUrl: {
                    type: String,
                    required: true,
                },
                likedDate: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    { timestamps: true },
)

const User = mongoose.model('User', userSchema)
export default User

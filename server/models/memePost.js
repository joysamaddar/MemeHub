const mongoose = require("mongoose");

const memeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    selectedFile: {
        type: String
    },
    laughCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model("MemePost", memeSchema);
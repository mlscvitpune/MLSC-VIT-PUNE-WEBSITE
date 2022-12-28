const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        domain: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: false,
        },
        position: {
            type: String,
            required: false,
        },
        year: {
            type: String,
            required: false,
        },
        linkedin: {
            type: String,
            required: false,
        },
        github: {
            type: String,
            required: false,
        },
        twitter: {
            type: String,
            required: false,
        },
        instagram: {
            type: String,
            required: false,
        },
    },
    { collection: "team" }
)

module.exports = mongoose.model("Team", teamSchema)
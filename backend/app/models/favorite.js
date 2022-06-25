const mongoose = require("mongoose");
const favoriteSchema = mongoose.Schema({
    author:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Favorite", favoriteSchema);

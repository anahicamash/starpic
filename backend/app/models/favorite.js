const mongoose = require("mongoose");
const favoriteSchema = mongoose.Schema({
    link:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Favorite", favoriteSchema);

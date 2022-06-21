const express = require('express');
const router = express.Router();
const favoriteSchema = require("../models/favorite");

//POST http://localhost:8080/api/favorite
router.post("/favorite", (req,res) => {
    favoriteSchema(req.body)
        .save()
        .then(response => console.log(response))
        .catch(err => console.error(err));
});

//GET http://localhost:8080/api/favorite
router.get("/favorite", (req,res) => {
    favoriteSchema
        .find()
        .then(response => {
            console.log(response);
            res.json(response);//return to the client the data
        })
        .catch(err => console.error(err));
});

//GET BY ID http://localhost:8080/api/favorite/id
router.get("/favorite/:id", (req,res) => {
    const { id } = req.params;
    favoriteSchema
        .findById({ _id: id })
        .then(response => {
            console.log(response);
            res.json(response);//return to the client the data
        })
        .catch(err => console.error(err))
});

//PUT http://localhost:8080/api/favorite/id
router.put("/favorite/:id", (req,res) => {
    const { id } = req.params;
    const { link } = req.body;
    favoriteSchema
        .updateOne({ _id: id }, { $set: { link: link } })
        .then(response => console.log(response))
        .catch(err => console.error(err))
});

//DELETE http://localhost:8080/api/favorite/id
router.delete("/favorite/:id", (req, res) => {
    const { id } = req.params;
    favoriteSchema
        .deleteOne({ _id: id })
        .then(response => console.log(response))
        .catch(err => console.error(err));
});

module.exports = router;
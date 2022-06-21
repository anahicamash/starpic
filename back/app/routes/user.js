const express = require('express');
const router = express.Router();
const userSchema = require("../models/user");

//Create
router.post("/users",(req,res) => {
    const user = userSchema(req.body);
    user
        .save()//saving in DB
        .then((data) => console.log("CREATE ",data))//all good
        .catch((error) => console.error(error));//some error
});

//Read
router.get("/users",(req,res) => {
    userSchema
        .find()//finding data in DB
        .then((data) => console.log(data))//all good
        .catch((error) => console.error(error));//some error
});

//Read by id
router.get("/users/:id",(req,res) => {
    const { id } = req.params;
    userSchema
        .findById(id)//finding data in DB
        .then((data) => console.log(data))//all good
        .catch((error) => console.error(error));//some error
});

//Update
router.put("/users/:id",(req,res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: {name, email, password} })//if _id = id, update data
        .then((data) => console.log(data))//all good
        .catch((error) => console.error(error));//some error
});

//Delete
router.delete("/users/:id",(req,res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })//if _id = id, remove data
        .then((data) => console.log(data))//all good
        .catch((error) => console.error(error));//some error
});

module.exports = router;
const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// http://localhost:5000/user/create
router.post("/create", (req, res) => {
  const body = req.body;
  const newUser = new User(body);
  newUser
    .save()
    .then((response) => res.status(201).json(response))
    .catch((e) => res.status(501).json({ message: e.message }));
});

// http://localhost:5000/user/all
router.get("/all", (req, res) => {
  User.find()
    .then((jawab) => res.status(200).json(jawab))
    .catch((e) => res.status(501).json({ message: e.message }));
});

// http://localhost:5000/user/edit/<id>
router.put("/edit/:id", (req, res) => {
  const body = req.body;
  User.findByIdAndUpdate({ _id: req.params.id }, body)
    .then((response) => res.status(201).json({ message: "success" }))
    .catch((e) => res.status(501).json({ message: e.message }));
});

// http://localhost:5000/user/remove/<id>
router.delete('/remove/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then((response) => res.status(201).json({ message: "success" }))
      .catch((e) => res.status(501).json({ message: e.message }));
})

module.exports = router;

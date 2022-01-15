const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

const userRoutes = require('./routes/user.route')
app.use('/user', userRoutes)

mongoose
  .connect(
    "mongodb+srv://123Hello:123@cluster0.pjbbc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    app.listen(port, () => console.log(`server is running on ${port}`));
  })
  .catch((e) => console.log(e));

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const userRoutes = require("./routes/UserRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());


// mongoose.connect("mongodb+srv://koyenapaul23:koyenapaul23@cluster0.7dnova3.mongodb.net/?retryWrites=true&w=majority",{
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
// }).then(()=>console.log("DB connection successfull")).catch((err)=>console.log(err));


// app.use("/api/user",userRoutes);


// app.listen(5000,console.log("server started"));

const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://koyenapaul23:koyenapaul23@cluster0.7dnova3.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
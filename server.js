const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))
 
mongoose.connect("mongodb://localhost:27017/12-31-20",
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    },
    () => console.log("connected database"))

app.use("/bounties", require("./routes/bountyRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})
app.listen(9000, () => {
    console.log("successfully running on port 9000")
})
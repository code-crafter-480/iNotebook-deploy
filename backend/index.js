
const path = require("path")
const connectToMongo = require('./db')
const express = require('express')
const cors = require("cors")
connectToMongo()

const app = express()
// const port = 3000         // Our react app will run this port...
const port = 5000
// const port = "https://deploy-inotebook.onrender.com"
const _dirname = path.resolve()

app.use(cors())
app.use(express.json())

const corsOptions = {
  origin: "https://inotebook-deploy.onrender.com",
  credentials : true
}
app.use(cors(corsOptions));

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.use(express.static(path.join(_dirname, "/frontend/build")))
app.get("*", (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"));
})

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})
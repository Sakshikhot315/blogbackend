const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

const connect = require('./connect')

const blogRoute = require('./routes/blog')

const userRoute = require('./routes/user')

app.use(cors())

app.use(express.json())

app.use('/api/blogs',blogRoute)

app.use('/api/users',userRoute)

app.get('/', (req, res) => {
  res.send('Hello World Blog!')
})

app.listen(port, () => {
  console.log(`Server Running on port ${port}`)
})
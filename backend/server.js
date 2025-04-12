require('dotenv').config()
const express = require('express')
const dummyRoutes = require('./routes/dummyRoutes')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/dummy', dummyRoutes)


//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 4000!!')
})


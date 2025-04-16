require('dotenv').config()
const express = require('express')
const botRoutes = require('./routes/botRoutes')
const scraperRoutes = require('./routes/scraperRoutes')
const webAppRoutes = require('./routes/webAppRoutes')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/bot', botRoutes)
app.use('/scraper', scraperRoutes)
app.use('/web', webAppRoutes)


//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server is running on port 4000!!')
})


const path = require('path')
const express = require('express')
const exp = require('constants')

const app = express()
const port = process.env.PORT || 3000

//Define paths for Express config
const publicDir = path.join(__dirname, '../public') 

app.use(express.static(publicDir))

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
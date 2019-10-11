if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middlewares/errorHandler')


mongoose.connect(process.env.MONGOOSE, { useNewUrlParser: true , useUnifiedTopology: true }, (err) => {
    if(err){
        console.log(err)
    } else {
        console.log('connect to mongodb atlas')
    }
})
mongoose.Promise = global.Promise


app.use(express.json())
app.use(express.urlencoded({ extended : false}))

app.use(cors())
app.use('/' , router)

app.use(errorHandler)


app.listen(PORT, _ => console.log(`app is running`, PORT))

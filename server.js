require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const Router = require('./routes')
var FileStore = require('session-file-store')(session)
const PORT = process.env.PORT || 80

app.use(cors({
 origin: [process.env.ORIGIN],
 methods: ['GET','POST','PUT','DELETE'],
 credentials: true // enable set cookie
}))

app.use(cookieParser(process.env.SESSIONSECRET)) // any string ex: 'keyboard cat'
app.use(session({
  secret: process.env.SESSIONSECRET,
  store: new FileStore,
  cookie: {
    maxAge: 36000,
    httpOnly: false,
    secure: false // for normal http connection if https is there we have to set it to true
  },
  resave: false,
  saveUninitialized: true
})) 

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next()
})

app.use(express.json())
app.use(Router)

app.listen(PORT, function(){
  console.log('Server started at: http://localhost:'+PORT)
})
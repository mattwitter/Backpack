const bodyParser = require('body-parser')
const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')
const bcrypt = require('bcryptjs')
const pug = require('pug')
const Sequelize = require('sequelize')
const models = require('./models')
const path = require('path')
const { userLogin } = require('./controllers/auth')
const { getIndex, getDashboard, getClasses, getGrades, getAssignments, registerForClasses, getAssignmentsByUser, getAssignmentsByClass, getAttendance } = require('./controllers/web')

const app = express()

//setup pug to render views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//Set Session
app.use(session({
    store: new FileStore(session)({ secret: 'secret' }),
    secret: 'secret', //should use random string generator
    resave: true,
    saveUninitialized: false,
    cookie: {
        domain: process.env.COOKIE_DOMAIN, maxAge: process.env.SESS_LIFETIME, httpOnly: true,
        sameSite: true,
    },
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }))

//HTTP REQUESTS
app.get('/', getIndex)
app.post('/auth', userLogin)
app.get('/dashboard', getDashboard)
app.get('/classes', getClasses)
app.get('/grades', getGrades)
app.get('/registerForClasses', registerForClasses)
app.get('/assignments', getAssignmentsByUser)
app.get('/classAssignments', getAssignmentsByClass)
app.get('/attendance', getAttendance)


const server = app.listen(3001, () => { console.log('Listening on port 3001') })

module.exports = server
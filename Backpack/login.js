const mysql = require('mysql2')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')
const models = require('./models')
const bcrypt = require('bcryptjs')
const FileStore = require('session-file-store')
const pug = require('pug')



const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static("public"))

// Auth Packages
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

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function (request, response) {
    response.render('index')
})

app.post('/auth', async function (request, response) {
    const { emailAddress, password } = request.body
    const user = await models.Users.findOne({ where: { emailAddress } })
    if (!user) response.status(403).send('Incorrect Email and/or Password!')

    if (bcrypt.compareSync(password, user.password)) {
        request.session.userId = user.id
        request.session.role = user.role
        response.render('dashboard')
    }
    else {
        response.send('Please enter Email and Password!')
        response.end()
    }
})

app.get('/details', async function (request, response) {
    const user = await models.Users.findOne({
        where: { id: request.session.userId }
    })
    return response.render('details', {
        userId: user.id,
        role: request.session.role,
        firstName: user.firstName,
        lastName: user.lastName

    })
})

app.get('/dashboard', function (request, response) {
    if (request.session.userId) {
        response.sendFile(path.join(__dirname + '/public/studentDashboard.html'))

    } else {
        response.send('Please login to view this page!')
        response.end()
    }
})

const server = app.listen(1337, () => { console.log('Listening on port 1337') })

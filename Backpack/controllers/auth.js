const models = require('../models')
const bcrypt = require('bcryptjs')

async function userLogin(request, response) {
    const { emailAddress, password } = request.body
    const user = await models.users.findOne({ where: { emailAddress } })
    if (!user) response.status(403).send('Incorrect Email and/or Password!')

    if (bcrypt.compareSync(password, user.password)) {
        request.session.userId = user.id
        request.session.role = user.role
        request.session.firstName = user.firstName
        request.session.lastName = user.lastName
        response.redirect('dashboard')
    }
    else {
        response.send('Please enter Email and Password!')
        response.end()
    }
}

module.exports = {
    userLogin
}
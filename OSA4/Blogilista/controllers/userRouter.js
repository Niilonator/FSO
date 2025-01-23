const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10);
usersRouter.post('/',async(request, response, next) => {
    const body = request.body
    pwhash = bcrypt.hashSync(body.password)

    addingUser = new User({
        name: body.name,
        username: body.username,
        pwHash: pwhash,
    })

    const addedUser = await addingUser.save()
    response.status(201).json(addedUser)

})
usersRouter.get('/', async (request,response,next) => {
    const users = await User.find({}).populate('blogs',{title: 1,author: 1,url: 1,likes: 1})
        response.json(users)
})

usersRouter.delete('/:id',async (request,response,next) => {
    await User.findByIdAndDelete(request.params.id)
    response.status(204).end()
})

module.exports = usersRouter
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{ 
        type: String,
        required: true
    },
    username:{ 
        type: String,
        required: true
    },
    pwHash:{ 
        type: String
    },
    blogs: [{type: mongoose.Types.ObjectId, ref: 'Blog'}]
})
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      
    }
  })
module.exports = mongoose.model('User',userSchema)
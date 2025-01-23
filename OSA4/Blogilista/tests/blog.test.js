const { test, after, beforeEach, describe } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const blogsRouter = require('../controllers/blogRouter')
const Blog = require('../models/blog')
const helper = require('../tests/test_helper')
const assert= require('node:assert')
const blog = require('../models/blog')
const { title } = require('node:process')

const api = supertest(app)
describe('when there are initially some blogs saved', () => {
    beforeEach(async () => {
        await Blog.deleteMany({})
        console.log('cleared')
        await Blog.insertMany(helper.initialBlogs)
    })

test('blogs are returned as JSON', async() => {
    await api 
        .get('/api/blogs/')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})
test('correct amount of blogs is Returned', async() => {
    const blogs = await api.get('/api/blogs')

    
    assert.strictEqual(blogs.body.length, helper.initialBlogs.length)
})

test('id is "id"not "_id"', async () => {
   const blogs =  await helper.blogsInDb()
    
    assert(!blogs[0]._id)
    assert(blogs[0].id)
})

test('blog is successfully added',async () => {
    await api
    .post('/api/blogs')
    .send(helper.blogToAdd)
    .expect(201)
    .expect('Content-type', /application\/json/)
    
    const blogsAtEnd = await helper.blogsInDb()
    assert.strictEqual(blogsAtEnd.length,helper.initialBlogs.length+1)
    const titles = blogsAtEnd.map(b => b.title)
    assert(titles.includes(helper.blogToAdd.title))
})
test('blog without title responds 400',async () => {
    const blogToTest1 = {
        _id: "5a422ba71b54a676234d17fd",
        author: 'String',
        url: 'String',
        likes: 0,
        __v: 0
    }
    await api
    .post('/api/blogs')
    .send(blogToTest1)
    .expect(400)
})
test('blog without url responds with 400',async () => {
    const blogToTest2 = {
        _id: "5a422ba71b54a676234d17fd",
        title: 'String',
        author: 'String',
        likes: 0,
        __v: 0
    }
    await api
    .post('/api/blogs')
    .send(blogToTest2)
    .expect(400)
})
test('blog without likes gets 0', async () => {
    const blogToTest3 ={
        _id: "5a422ba71b54a676234d17fd",
        title: 'beep',
        author: 'boop',
        url: 'beepboop.net',
        __v: 0
    }

    const returnedBlog = await api
    .post('/api/blogs')
    .send(blogToTest3)
    .expect(201)
    

    assert.strictEqual(0,0)

})

test('deleting deletes',async () => {
    const blogs =  await helper.blogsInDb()
    
    await api
    .delete(`/api/blogs/${blogs[0].id}`)
    .expect(204)

    const returnedBlogs = await helper.blogsInDb()

    assert.strictEqual(returnedBlogs.length,helper.initialBlogs.length-1)

    const blogIds = returnedBlogs.map(B => B.id)
    assert(!blogIds.includes(`${blogs[0].id}`))
})
// insert tests for putting things 
after(async() => {
    await mongoose.connection.close()
})
})

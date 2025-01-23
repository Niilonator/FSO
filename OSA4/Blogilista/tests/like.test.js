const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})
describe('total likes', () => {
    const listWithoutBlogs = []
    test('of empty list is 0',() => {
        const result = listHelper.totalLikes(listWithoutBlogs)
        assert.strictEqual(result,0)
    }) 
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      }
    ]
    test('one list equals the likes of that',() => {
        const result = listHelper.totalLikes(listWithOneBlog)
        assert.strictEqual(result,5)
    })
    const listWithBlogs = [
        {
            _id: '5a446545a676234d17f8',
            title: 'Go 5To Statement Considered Harmful',
            author: '2Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
          },{
            _id: '5a4546471b54a676234d17f8',
            title: 'Go To Statemen5t Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 3,
            __v: 0
          },{
            _id: '5a53254aa71b54a676234d17f8',
            title: 'Go To State5ment Considered Harmful',
            author: '4Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
          },{
            _id: '5a442aa71b54a676234d17f8',
            title: 'Go To Statement Conside5red Harmful',
            author: '5Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
          },{
            _id: '5a423aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 4,
            __v: 0
          }
    ]
test('of a bigger list is calculated right',()=>{
    const result =listHelper.totalLikes(listWithBlogs)
    assert.strictEqual(result,22)
})
})


const lodash = require('lodash');

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let totalLikes = 0
  blogs.forEach(blog => {
    totalLikes += blog.likes
  })
  return totalLikes
}

const favoriteBlog = (blogs) => {
  let maxLikes = 0
  let favoriteBlogIndex = 0
  blogs.forEach((blog, index) => {
    if (blog.likes >= maxLikes) {
      maxLikes = blog.likes
      favoriteBlogIndex = index
    }
  })
  return blogs[favoriteBlogIndex]
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null
  }

  const groupedByAuthor = lodash.groupBy(blogs, 'author')
  const authorBlogCounts = lodash.mapValues(groupedByAuthor, (blogs) => blogs.length)
  const mostBlogsAuthor = lodash.maxBy(Object.entries(authorBlogCounts), ([, count]) => count)

  return { author: mostBlogsAuthor[0], blogs: mostBlogsAuthor[1]}
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs
}
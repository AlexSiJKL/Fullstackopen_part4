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

  let blogsAuthors = {}

  blogs.forEach(blog => {
    const author = blog.author
    if (author in blogsAuthors) {
      blogsAuthors[author] += 1
    } else { 
      blogsAuthors[author] = 1
    }
  })

  const mostBlogsAuthor = Object.entries(blogsAuthors).reduce((max, current) => {
    return current[1] > max[1] ? current : max
  })
  return { author: mostBlogsAuthor[0], blogs: mostBlogsAuthor[1]}
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs
}
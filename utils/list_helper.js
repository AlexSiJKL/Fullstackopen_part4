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

module.exports = {
  dummy, totalLikes, favoriteBlog
}
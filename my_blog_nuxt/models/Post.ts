import PostCategory from './PostCategory'

interface Post {
  id: number
  title: string
  content: string
  imageUrl: string
  publishedAt: string
  postCategory: PostCategory
}

export default Post
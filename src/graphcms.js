import axios from 'axios'

export const ENDPOINT = process.env.VUE_APP_ENDPOINT;
const TOKEN = process.env.VUE_APP_TOKEN;

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${TOKEN}`
};

export const apiClient = axios.create({
  headers,
});

export const POSTS_BY_CATEGORY_QUERY = `
  query PostsByCategory($category: String!){
    category(where: {
      name: $category
    }
    ){
      name,
      posts {
        id
        slug
        title
        content
        categories {
          name
        }
      }
    }
  }
`

export const POST_BY_SLUG_QUERY=`
  query PostBySlug($slug: String!){
  post(where: {
    slug: $slug
  })
  {
    id
    title
    content
    categories {
      name
    }
    comments {
      name
      message
    }
  }
}
`

export const CREATE_COMMENT_MUTATION=`
mutation CreateComment($post: PostWhereUniqueInput!, $name: String!, $message: String!){
  createComment(data: {
    name: $name,
    message: $message,
    post: {
      connect: $post
    }
  })
  {
    id
    name
    message
  }
}
`

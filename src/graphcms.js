import axios from 'axios'

export const ENDPOINT = process.env.VUE_APP_ENDPOINT || 'https://api-euwest.graphcms.com/v1/cjoo5rche2i7o01ghhh6crlfo/master';
const ro_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZWIwNjZkMTctODI5MC00Mzk1LTgwZWMtODkxN2Q5MjY0NGEwIn0._eYwFVutVKAz7-BhMrIgTHazUwxRhMdR9Unfnr44pHo';
const TOKEN = process.env.VUE_APP_TOKEN || ro_token;

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

<template>
  <section class="post-list">
    <h1>{{ category }} Articles</h1>
    <hr/>
    <b-card tag="article" v-for="post in posts" :key="post.id" :title="post.title" :sub-title="post.categories.map(cat => cat.name).toString()">
      <p class="card-text">
        {{ post.content }}
      </p>
      <b-button :href="'post/' + post.slug" variant="primary">
        Read Post
      </b-button>
    </b-card>
  </section>
</template>

<script>
import { ENDPOINT, apiClient, POSTS_BY_CATEGORY_QUERY } from '../graphcms.js';

export default {
  name: "PostList",
  data(){
    return {
      category: '',
      posts: []
    }
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await apiClient.post(ENDPOINT, {
          query: POSTS_BY_CATEGORY_QUERY,
          variables: {
            category: this.category
          }
        });

        const body = await response.data.data;
        this.posts = await body.category.posts;
      } catch (error) {
        console.log(error)
      }

    }
  },
  created() {
    this.category = this.$route.name;
    this.fetchPosts();
  },
  watch: {
    $route(to, from) {
      this.category = this.$route.name;
      this.posts = [];
      this.fetchPosts();
    }
  }
}
</script>

<style>
h1{
  margin-top: 25px !important;
}
</style>

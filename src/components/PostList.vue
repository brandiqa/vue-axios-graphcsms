<template>
  <section class="post-list">
    <h1>{{ category }} Articles</h1>
    <hr/>
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
      console.log("Fetching posts...", this.category)
      try {
        const response = await apiClient.post(ENDPOINT, {
          query: POSTS_BY_CATEGORY_QUERY,
          variables: {
            category: this.category
          }
        });
        console.log('Received', response.data);
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

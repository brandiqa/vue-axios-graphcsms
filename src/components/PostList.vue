<template>
  <section class="post-list">
    <h1>{{ category }} Articles</h1>
    <hr/>
  </section>
</template>

<script>
export default {
  name: "PostList",
  data(){
    return {
      category: ''
    }
  },
  created() {
    this.category = this.$route.name;
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      // console.log("Fetching posts...", this.category)
    }
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

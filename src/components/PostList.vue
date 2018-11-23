<template>
  <section class="post-list">
    <h1>{{ category }} Articles</h1>
    <hr/>
    <b-row v-if="loading" align-h="center">
      <b-col>
        <div class="lds-dual-ring text-center"></div>
      </b-col>
    </b-row>
    <b-card v-if="!loading" tag="article" v-for="post in posts" :key="post.id" :title="post.title" :sub-title="post.categories.map(cat => cat.name).toString()">
      <p class="card-text">
        {{ post.content }}
      </p>
      <router-link class="btn btn-primary" :to="'post/' + post.slug">
        Read Post
      </router-link>
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
      loading: false,
      posts: []
    }
  },
  methods: {
    async fetchPosts() {
      try {
        this.loading = true;
        const response = await apiClient.post(ENDPOINT, {
          query: POSTS_BY_CATEGORY_QUERY,
          variables: {
            category: this.category
          }
        });

        const body = await response.data.data;
        this.posts = await body.category.posts;
        this.loading = false;
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
.lds-dual-ring {
  display: inline-block;
  width: 64px;
  height: 64px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin-top: 10vh;
  margin-left: 30vw;
  border-radius: 50%;
  border: 5px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>

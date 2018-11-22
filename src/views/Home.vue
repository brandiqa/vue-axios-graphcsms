<template>
  <div class="home">
    <PostList />
    <p>{{ category}} </p>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'

export default {
  name: 'home',
  components: {
    PostList
  },
  data(){
    return {
      category: ''
    }
  },
  watch: {
    $route(to, from) {
      this.category = this.$route.name;
      console.log(this.category)
    }
  }
}
</script>

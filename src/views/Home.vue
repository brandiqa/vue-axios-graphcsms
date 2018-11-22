<template>
  <div class="home">
    <PostList :category="category"/>
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
  created() {
    this.category = this.$route.name;
  },
  watch: {
    $route(to, from) {
      this.category = this.$route.name;
      console.log(this.category)
    }
  }
}
</script>

<template>
  <div class="home">
    <PostList />
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '@/components/PostList.vue'

export default {
  name: 'home',
  components: {
    PostList
  }
}
</script>

<template>
  <div class="post-view">
    <Post/>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'

export default {
  name: 'PostView',
  components: {
    Post
  }
}
</script>

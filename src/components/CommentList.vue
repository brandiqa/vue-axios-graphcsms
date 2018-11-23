<template>
  <section class="comment-list">
    <hr/>
    <h4 class="text-muted">Comments</h4>
    <b-card v-for="comment in comments" :title="comment.name" title-tag="h5" :key="comment.id">
      <p class="card-text text-muted">{{ comment.message }}  </p>
    </b-card>
    <p v-if="comments.length === 0" class="text-center text-muted">No comments posted yet!</p>
  </section>
</template>

<script>
export default {
  name: "CommentsList",
  props: ["comments"]
}
</script>

<style>

</style>

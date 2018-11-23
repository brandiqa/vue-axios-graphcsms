<template>
  <section class="comment-list">
    <h4>Comments</h4>
    <b-card v-for="comment in comments" :title="comment.name" title-tag="h5" :key="comment.id">
      <p class="card-text text-muted">{{ comment.message }}  </p>
    </b-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        {
          id: "abc",
          name: "John Doe",
          message: "Nice Article!"
        },
        {
           id: "def",
          name: "Jane Doe",
          message: "Good work! Keep it up"
        }
      ]
    }
  }
}
</script>

<style>

</style>

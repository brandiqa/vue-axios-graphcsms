<template>
  <section class="comment-form">
    <h4 class="text-muted">Comment Form</h4>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Name">
        <b-form-input id="input-name" type="text" v-model="name" placeholder="Enter your name" required></b-form-input>
      </b-form-group>
       <b-form-group label="Message">
         <b-form-textarea id="input-message"
                          v-model="message"
                          placeholder="Enter your comment"
                          :rows="3"
                          :max-rows="6"
                          required>
          </b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </section>
</template>

<script>
import { apiClient, ENDPOINT, CREATE_COMMENT_MUTATION } from "../graphcms.js";

export default {
  name: "CommentForm",
  props: ['post'],
  data() {
    return {
      name: '',
      message: ''
    }
  },
  methods: {
    async onSubmit() {
      const formattedComment = {
        name: this.name,
        message: this.message,
        post: {
          id: this.post.id
        }
      }
      try {
        const response = await apiClient.post(ENDPOINT, {
          query: CREATE_COMMENT_MUTATION,
          variables: formattedComment
        });

       const body = await response.data.data;
       const newComment = body.createComment;
       this.post.comments.push(newComment);
       this.name = '';
       this.message = '';
      } catch (error) {
          console.log(error)
      }
    }
  }
}
</script>

<style>
  .comment-form {
    margin-top: 35px;
  }
</style>

<template>
  <section class="comment-form">
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
    onSubmit() {
      console.log(this.post)
      console.log(this.name, this.message);
    }
  }
}
</script>

<style>

</style>

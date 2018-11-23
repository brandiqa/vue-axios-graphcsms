<template>
  <section class="post">
    <b-row v-if="loading">
      <b-col>
        <div class="lds-dual-ring text-center"></div>
      </b-col>
    </b-row>
   <b-row v-if="!loading">
     <b-col>
      <h1>{{post.title}}</h1>
      <h4 class="text-muted">{{post.categories.map(cat => cat.name).toString()}}</h4>
      <hr>
      <p>{{ post.content }}</p>
     </b-col>
   </b-row>
   <!-- List of comments -->
   <b-row v-if="!loading">
     <b-col>
       <CommentList :comments="post.comments" />
     </b-col>
   </b-row>
   <!-- Comment form -->
    <b-row v-if="!loading">
     <b-col>
      <CommentForm :post="post" />
     </b-col>
   </b-row>
  </section>
</template>

<script>
import { ENDPOINT, apiClient, POST_BY_SLUG_QUERY } from '../graphcms.js';
import CommentList from '@/components/CommentList';
import CommentForm from '@/components/CommentForm';

export default {
  name: 'Post',
  components: {
    CommentList,
    CommentForm
  },
  data() {
    return {
      loading: false,
      slug: '',
      post: {},
    }
  },
  methods: {
    async fetchPost() {
      try {
        this.loading = true;
        const response = await apiClient.post(ENDPOINT, {
          query: POST_BY_SLUG_QUERY,
          variables: {
            slug: this.slug
          }
        });

        const body = await response.data.data;
        this.post = body.post;
        this.loading = false;
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.slug = this.$route.params.slug;
    this.fetchPost();
  }
}
</script>

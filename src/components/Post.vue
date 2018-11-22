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
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      post: {
        title: 'First Post',
        slug: 'first-post',
        content:'My very first post',
        categories:[
          { name: "Featured" },
          { name: "Food" },
        ]
      }
    }
  }
}
</script>

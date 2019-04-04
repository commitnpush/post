<template>
  <section class="PostList row">
    <template v-for="(post, index) in posts">
      <Post
        :key="'post' + post.no"
        :post="post"
        :category="categories[post.category_no - 1].name"
      />
      <Ad
        :key="'ad' + index"
        v-if="index % 4 === 3"
        :ad="ads[Math.floor(index / 4) % ads.length]"
      />
    </template>
  </section>
</template>

<script>
import Post from "./Post.vue";
import Ad from "./Ad.vue";
export default {
  name: "PostList",
  components: {
    Post,
    Ad
  },
  props: {
    posts: Array,
    ads: Array,
    categories: Array
  }
};
</script>

<style scoped></style>

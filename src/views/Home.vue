<template>
  <div class="Home container">
    <Modal
      v-if="filter"
      :categories="categories"
      :options="options"
      :onClose="handleFilter"
      :onSave="handleOptions"
    />
    <Header
      :asc="asc"
      :onChangeSort="handleAsc"
      :onFilterClick="handleFilter"
    />
    <PostList
      v-if="categories.length !== 0 && ads.length !== 0"
      :posts="posts"
      :categories="categories"
      :ads="ads"
    />
    <Up />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";
import Up from "@/components/Up.vue";

export default {
  name: "App",
  components: {
    PostList,
    Header,
    Modal,
    Up
  },
  data() {
    return {
      posts: [],
      categories: [],
      ads: [],
      asc: true,
      filter: false,
      options: [],
      loading: false,
      page: 1
    };
  },
  methods: {
    getPosts() {
      window.scroll(0, 0);
      let url = `${this.$host}/post?page=1&ord=${this.asc ? "asc" : "desc"}`;
      if (typeof this.options !== "undefined" && this.options.length > 0) {
        url += `&category=${this.options.join(",")}`;
      }

      this.$http
        .get(url)
        .then(res => {
          return res.data.list;
        })
        .then(result => {
          this.posts = result;
          return this.$http.get(`${this.$host}/category`);
        })
        .then(res => {
          return res.data.list;
        })
        .then(result => {
          this.categories = result;
          return this.$http.get(`${this.$host}/ad`);
        })
        .then(res => {
          return res.data.list;
        })
        .then(result => {
          this.ads = result;
        })
        .catch(error => {
          console.log(error);
        });
    },
    morePosts(page) {
      let url = `${this.$host}/post?page=${page || ++this.page}&ord=${
        this.asc ? "asc" : "desc"
      }`;
      if (typeof this.options !== "undefined" && this.options.length > 0) {
        url += `&category=${this.options.join(",")}`;
      }

      this.$http
        .get(url)
        .then(res => {
          return res.data.list;
        })
        .then(result => {
          this.posts = this.posts.concat(result);
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleAsc(type) {
      this.asc = type;
      this.getPosts();
    },
    handleFilter(type, time) {
      if (typeof time !== "undefined") {
        setTimeout(() => {
          this.filter = type;
        }, time);
        return;
      }
      this.filter = type;
    },
    handleOptions(options) {
      this.options = options;
      this.getPosts();
    },
    isBottom() {
      var scrollY = window.pageYOffset;
      var visible = document.documentElement.clientHeight;
      var pageHeight = document.documentElement.scrollHeight;
      var bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    }
  },
  created() {
    window.addEventListener("scroll", () => {
      if (this.loading) {
        return;
      }
      this.loading = this.isBottom();
    });
    this.getPosts();
  },
  watch: {
    loading: function(loading) {
      if (loading) {
        this.morePosts();
      }
    }
  }
};
</script>

<style scoped lang="less"></style>

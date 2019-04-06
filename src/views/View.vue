<template>
  <div class="container">
    <div class="row">
      <div class="col col-xs-12">
        <div class="View panel panel-default" v-if="detail !== null">
          <div class="panel-heading header">
            <div class="title">
              {{ detail.article.title }}
            </div>
            <div class="list">
              <router-link :to="{ path: '/' }">목록</router-link>
            </div>
          </div>
          <div class="panel-body body">
            <div class="info">
              <div class="email">{{ detail.article.email }}</div>
              <span class="vertical-bar" />
              <div class="updated">{{ detail.article.updated_at }}</div>
            </div>
            <div class="contents">
              {{ detail.article.contents }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="detail !== null && detail.replies.length !== 0">
      <div class="row">
        <div class="col col-xs-12">
          <div class="reply">replies</div>
        </div>
      </div>
      <Reply v-for="reply of detail.replies" :reply="reply" :key="reply.no" />
    </template>
  </div>
</template>

<script>
import Reply from "@/components/Reply.vue";
export default {
  name: "View0",
  components: {
    Reply
  },
  data() {
    return {
      detail: null
    };
  },

  created() {
    this.$http
      .get(`${this.$host}/post/${this.$route.params.no}`)
      .then(res => {
        this.detail = res.data.detail;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped lang="less">
.View {
  text-align: left;
  .header {
    display: flex;
    justify-content: space-between;
  }
  .info {
    height: 50px;
    display: flex;
    .vertical-bar {
      display: inline-block;
      height: 30px;
      margin: 0 10px;
      border-left: 1px solid gray;
    }
    .email,
    .updated {
      font-weight: 600;
      line-height: 30px;
    }
    @media (max-width: 340px) {
      .updated {
        font-size: 1.1rem;
      }
    }
  }
}
.reply {
  text-align: left;
  font-size: 1.5rem;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
</style>

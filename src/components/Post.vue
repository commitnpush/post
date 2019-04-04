<template>
  <div class="col col-xs-12">
    <article
      class="Post panel panel-default"
      @click="$router.push({ name: 'view', params: { no: post.no } })"
    >
      <div :class="['panel-heading', 'text-left', 'header', category]">
        <span class="category">{{ category }}</span>
        <span class="no">{{ post.no }}</span>
      </div>
      <div class="panel-body body">
        <div class="info">
          <span class="email">{{ post.email }}</span>
          <span class="vertical-bar" />
          <span class="updated">{{ post.updated_at }}</span>
        </div>
        <div class="content">
          <div class="title">{{ post.title }}</div>
          <div class="contents">{{ post.contents }}</div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    category: String,
    post: Object
  }
};
</script>

<style scoped lang="less">
.Post {
  cursor: pointer;
  text-align: left;
  .header {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    &.apple {
      color: #fff;
      background-color: #db554e;
      border-color: #ebccd1;
    }
    &.banana {
      color: #fff;
      background-color: #ede88e;
      border-color: #faebcc;
    }
    &.coconut {
      color: #fff;
      background-color: #9e7250;
      border-color: #b27a50;
    }
  }
  .body {
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
    .content {
      .title {
        font-size: 2rem;
        padding-bottom: 5px;
      }
      .title,
      .contents {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>

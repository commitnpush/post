<template>
  <div class="row">
    <div class="col col-xs-12">
      <div class="Reply">
        <div class="header">
          <div class="email">{{ reply.email }}</div>
          <div class="updated">{{ reply.updated_at }}</div>
        </div>
        <div class="body">
          {{ reply.contents }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Reply",
  props: {
    reply: Object
  }
};
</script>

<style scoped lang="less">
.Reply {
  text-align: left;
  margin-bottom: 20px;
  .header {
    display: flex;
    margin-bottom: 10px;
    .email {
      padding-right: 20px;
      font-size: 1.7rem;
    }
    .updated {
      line-height: 24px;
      font-size: 1rem;
    }
  }
  .body {
  }
}
</style>

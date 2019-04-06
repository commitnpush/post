<template>
  <div class="col col-xs-12">
    <article class="Ad">
      <div class="header">Sponsored</div>
      <div class="body">
        <div class="img">
          <img :src="$host + '/public/images/' + ad.img" alt="" />
        </div>
        <div class="content">
          <div class="title">{{ ad.title }}</div>
          <div class="contents">{{ ad.contents }}</div>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "Ad",
  props: {
    ad: Object
  }
};
</script>
<style scoped lang="less">
.Ad {
  margin-bottom: 40px;
  text-align: left;
  .header {
    padding: 10px;
  }
  .body {
    display: flex;
    @media (max-width: 480px) {
      flex-wrap: wrap;
    }
    .img {
      padding: 0 10px;
      img {
        width: 300px;
      }
      @media (max-width: 480px) {
        flex: 0 0 100%;
        margin-bottom: 20px;
        img {
          width: 100%;
        }
      }
    }
    .content {
      height: 200px;
      padding: 0 10px;
      @media (max-width: 480px) {
        height: auto;
        .contents {
          -webkit-line-clamp: 2 !important;
        }
      }
      .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 10px 0;
      }
      .contents {
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>

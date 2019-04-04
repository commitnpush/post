<template>
  <div class="Up" @click="toTop()">
    <div class="chevron"></div>
  </div>
</template>

<script>
export default {
  name: "Up",
  methods: {
    toTop() {
      window.scroll(0, 0);
    }
  }
};
</script>

<style scoped lang="less">
.Up {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  position: fixed;
  right: 30px;
  bottom: 30px;

  box-shadow: 0px 1px 2px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:after {
    content: "Top";
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .chevron {
    position: absolute;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
    height: 5px;
    width: 5px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 10%;
      width: 50%;
      background: #bbb;
      transform: skew(0deg, -45deg);
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 10%;
      width: 50%;
      background: #bbb;
      transform: skew(0deg, 45deg);
    }
  }
}
</style>

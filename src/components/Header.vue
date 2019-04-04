<template>
  <header class="Header row">
    <div class="action-container col col-xs-12">
      <div class="filter">
        <button
          type="button"
          class="btn btn-primary"
          @click="onFilterClick(true)"
        >
          필터
        </button>
      </div>
      <div class="sort">
        <span v-bind:class="{ selected: asc }" @click="onChangeSort(true)"
          >오름차순</span
        >
        <span v-bind:class="{ selected: !asc }" @click="onChangeSort(false)"
          >내림차순</span
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    asc: Boolean,
    onChangeSort: Function,
    onFilterClick: Function
  }
};
</script>

<style lang="less">
.Header {
  margin-bottom: 10px;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 9997;
  padding: 10px 0;
  border-bottom: 1px solid #aaa;
  .action-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .sort {
      span {
        padding: 5px;
        cursor: pointer;
        &.selected {
          color: #d9534f;
        }
      }
    }
  }
}
</style>

<template>
  <div class="Modal">
    <transition name="modal">
      <div v-bind:class="{ 'modal-mask': true, 'modal-close': !show }">
        <div class="modal-wrapper">
          <div class="modal-dialog modal-sm">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  @click="
                    onClose(false, 500);
                    show = false;
                  "
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title text-left">필터</h4>
              </div>
              <div class="modal-body">
                <div class="filter-items">
                  <label
                    class="filter-item"
                    v-for="category in categories"
                    v-bind:key="category.no"
                    :for="category.name"
                  >
                    <input
                      type="checkbox"
                      :id="category.name"
                      :value="category.no"
                      :checked="options.indexOf(category.no) != -1"
                      @click="handleOptions"
                    />
                    {{ category.name }}
                  </label>
                </div>
                <div class="filter-button">
                  <button
                    type="button"
                    @click="
                      onClose(false, 500);
                      show = false;
                      onSave(options);
                    "
                    class="btn btn-primary"
                  >
                    저장
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Modal",
  data() {
    return {
      show: true,
      optionsData: this.options
    };
  },
  methods: {
    handleOptions(e) {
      if (e.target.checked) {
        this.optionsData.push(e.target.value);
      } else {
        this.optionsData.splice(this.optionsData.indexOf(e.target.value), 1);
      }
    }
  },
  props: {
    categories: Array,
    options: Array,
    onClose: Function,
    onSave: Function
  }
};
</script>
<style lang="less">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: table;
  opacity: 1;
  transition: opacity 0.5s ease;
  &.modal-close {
    opacity: 0 !important;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
}
</style>
<style scoped lang="less">
.Modal {
  .filter-items {
    .filter-item {
      padding: 10px;
    }
    margin-bottom: 10px;
  }
  .filter-button {
    text-align: right;
  }
}
</style>

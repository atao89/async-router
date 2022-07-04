<template>
  <div class="header">
    <i
      :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
      @click="changeHandle"
    ></i>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("setting", ["isCollapse"]),
  },
  methods: {
    ...mapMutations("setting", ["changeCollapse"]),
    changeHandle() {
      this.changeCollapse();
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  background: #aaa;
  i {
    font-size: 28px;
    cursor: pointer;
  }
}
</style>
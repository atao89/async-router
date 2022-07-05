<template>
  <div class="header">
    <i
      :class="[isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
      @click="changeHandle"
    ></i>
    {{ device }}
  </div>
</template>

<script>
import {
  mapState,
  // mapGetters,
  mapMutations,
} from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("setting", ["isCollapse"]),
    ...mapState("app", ["device"]),
  },
  methods: {
    // ...mapGetters(["device"]),
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
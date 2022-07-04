<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="rgb(73, 80, 96)"
    text-color="rgba(255,255,255,0.7)"
    unique-opened
    :collapse="isCollapse"
  >
    <Menu :menuList="this.menuList"></Menu>
  </el-menu>
</template>

<script>
import { mapState } from "vuex";
import Menu from "./Menu.vue";
import menudata from "./menuList.json";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      menuList: menudata,
    };
  },
  created() {
    // console.log(menudata);
  },
  computed: {
    ...mapState("setting", ["isCollapse"]),
  },
  methods: {},
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
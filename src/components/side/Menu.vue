<template>
  <div>
    <template v-for="list in this.menuList">
      <el-submenu
        :index="list.resourceId"
        v-if="list.children.length > 0"
        :key="list.resourceId"
      >
        <template slot="title">
          <i v-if="list.icon" class="el-icon-menu"></i>
          <span slot="title">{{ list.resourceName }}</span>
        </template>
        <!-- 当有子集数据使用自调用，:menuList通过props传递 -->
        <Menu :menuList="list.children"></Menu>
      </el-submenu>
      <el-menu-item v-else :index="list.resourceId" :key="list.resourceId">
        <i v-if="list.icon" class="el-icon-menu"></i>
        <span>{{ list.resourceName }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "Menu", //递归组件的关键，并且要与引入组件的变量名称一致
  data() {
    return {};
  },
  props: ["menuList"],
};
</script>

<style>
.el-menu--collapse span,
.el-menu--collapse i.el-submenu__icon-arrow {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>
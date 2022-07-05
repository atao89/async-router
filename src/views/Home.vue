<template>
  <div class="home">
    <el-row>
      <el-col
        :xs="24"
        :sm="12"
        :md="6"
        :lg="4"
        :xl="2"
        v-for="item in dataList"
        :key="item.id"
      >
        <div class="grid-content bg-purple">
          {{ item.text }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const data = [];
for (var i = 1; i <= 100; i++) {
  data.push({
    id: i,
    text: "动态路由，动态即不是写死的，是可变的。我们可以根据自己不同的需求加载不同的路由，做到不同的实现及页面的渲染。动态的路由存储可分为两种，一种是将路由存储到前端。另一种则是将路由存储到数据库",
  });
}
export default {
  name: "Home",
  data() {
    return {
      dataList: data,
    };
  },
};
</script>

<style>
.el-row {
  width: 100%;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin: 10px;
}
</style>

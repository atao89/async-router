<template>
  <div id="app">
    <div
      ref="left"
      :class="[{ isMobile: $store.state.app.device === 'mobile' }, 'side']"
      v-if="$store.state.app.device === 'desktop'"
    >
      <div class="logo">Logo</div>
      <div class="menu">
        <Menu />
      </div>
    </div>
    <!-- <div ref="line" class="resize-line"></div> -->
    <div ref="right" class="content">
      <Header />
      <Breadcrumb />
      <Nav />
      <router-view />
    </div>
  </div>
</template>

<script>
import enquireScreen from "@/utils/device";
import Menu from "./components/side/index.vue";
import Header from "./components/header/index.vue";
import Breadcrumb from "./components/breadcrumb/index.vue";
import Nav from "./components/nav/index.vue";
export default {
  components: {
    Menu,
    Header,
    Breadcrumb,
    Nav,
  },
  created() {
    let that = this;
    enquireScreen((deviceType) => {
      // tablet
      if (deviceType === 0) {
        sessionStorage.setItem("DEVICE", "mobile");
        that.$store.commit("app/SET_DEVICE", "mobile");
      }
      // mobile
      else if (deviceType === 1) {
        sessionStorage.setItem("DEVICE", "mobile");
        that.$store.commit("app/SET_DEVICE", "mobile");
      } else {
        sessionStorage.setItem("DEVICE", "desktop");
        that.$store.commit("app/SET_DEVICE", "desktop");
      }
    });
  },
  methods: {
    drapContent() {
      // 获取 左边区域 的 宽度
      let left = this.$refs.left;
      // 获取 移动区域 的 宽度
      let line = this.$refs.line;
      // 获取 右边区域 的 宽度
      let right = this.$refs.right;
      // 移动区域鼠标移入事件
      line.onmousedown = function (e) {
        // 移动的距离
        let lineLeft = e.clientX;
        document.onmousemove = function (e) {
          // 移动的位置 （侧边栏的宽度 + 移动的宽度）
          let diffVal = 202 + (e.clientX - lineLeft);
          // 移动区间的范围 [202, 450]
          if (diffVal >= 202 && diffVal <= 450) {
            // 移动区域距离左边的距离
            line.style.left = diffVal + "px";
            // 左边缩放的宽度
            left.style.width = diffVal + "px";
            // 右边改变后的宽度 （改变后的宽度要加上移动区域的宽度）
            right.style.width =
              document.getElementById("app").clientWidth - (diffVal + 2) + "px";
          }
        };
        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
  },
  mounted() {
    // this.drapContent();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  display: flex;
}
.side {
  // width: 200px;
  height: 100%;
  user-select: none;
  display: flex;
  flex-direction: column;
  .logo {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #aaa;
  }
  .menu {
    flex: 1;
    background: #bbb;
  }
}
// .resize-line {
//   cursor: ew-resize;
//   width: 2px;
//   min-width: 2px;
//   max-width: 2px;
//   background-color: #efefef;
// }
.content {
  // width: calc(100% - 202px);
  // max-width: calc(100% - 202px);
  overflow-x: hidden;
  user-select: none;
  background: #fff;
}
</style>

<template>
  <div id="app">
    <div class="nav">
      <router-link to="/" tag="p">Home</router-link>
      <router-link to="/about" tag="p">About</router-link>
    </div>
    <router-view class="router-view" />
  </div>
</template>

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
.nav {
  width: 200px;
  border-right: 1px solid #efefef;
  p {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.router-view {
  flex: 1;
}
</style>

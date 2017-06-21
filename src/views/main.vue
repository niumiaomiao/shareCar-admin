<template>
  <div class="hello">
    <div class="main">
      <div class="menu">
        <sys-menu></sys-menu>
      </div>
      <div class="content">
        <router-view></router-view>
        <!-- <sys-footer></sys-footer> -->
      </div>
    </div>
  </div>
</template>

<script>
// import sysFooter from '../components/common/footer'
import sysMenu from '../components/common/menu'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    sysMenu
  }
}
</script>

<style>
  .main {
    width: 100%;
  }
  .menu {
    width: 240px;
    border-right: solid 1px #e1e1e1;
    position: fixed;
    left: 0;
  }
  .content {
    margin-left: 255px;
  }
</style>

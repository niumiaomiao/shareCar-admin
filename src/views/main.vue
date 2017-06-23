<template>
  <div class="hello">
    <div class="main">
      <sys-header></sys-header>
      <div class="menu">
        <sys-menu></sys-menu>
      </div>
      <div class="content">
        <router-view></router-view>
        <sys-footer></sys-footer>
      </div>
    </div>
  </div>
</template>

<script>
import sysHeader from '../components/common/header'
import sysFooter from '../components/common/footer'
import sysMenu from '../components/common/menu'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    sysHeader,
    sysMenu,
    sysFooter
  }
}
</script>

<style>
  .main {
    width: 100%;
    background: #f5f7f9;
    font-size: 14px;
  }
  .menu {
    width: 240px;
    border-right: solid 1px #e1e1e1;
    position: fixed;
    left: 0;
    top: 50px;
  }
  .content {
    margin-left: 255px;
    margin-top: 50px;
  }
</style>

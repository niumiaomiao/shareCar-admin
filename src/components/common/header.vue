<template>
  <div class="headerBox">
    <div class="left">后台管理系统</div>
    <div class="right">退出</div>
  </div>
</template>

<style>
  .headerBox {
    height: 50px;
    background-color: #1c2438;
    color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
  }
  .left {
    float: left;
    box-sizing: border-box;
    padding: 8px 54px;
    font-size: 16px;
    background: #5b6270;
    border-radius: 5px;
    margin-left: 20px;
    margin-top: 10px;
  }
  .right {
    float: right;
    color: #fff;
    margin-right: 20px;
    margin-top: 10px;
    padding: 6px 20px;
    box-sizing: border-box;
    border: 1px solid #fff;
    border-radius: 5px;
    font-size: 14px;
  }
  .right:hover {
    color: #2d8cf0;
    border: 1px solid #2d8cf0;
    cursor: pointer;
  }
</style>

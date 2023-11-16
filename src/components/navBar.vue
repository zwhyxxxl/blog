<template>
  <div class="mian">
    <div class="nav-container">
      <div class="left">456</div>
      <div class="right">
        <div class="menu-item">
          <router-link to="path" class="menu-btn">
            <i class="iconfont icon-shouye"></i>
            首页
          </router-link>
        </div>
        <div class="menu-item">
          <router-link to="/" class="menu-btn" disabled>
            <i class="iconfont icon-faxian"></i>
            发现
            <i class="iconfont icon-xiangxia"></i>
          </router-link>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="menu-item">
          <router-link to="/" class="menu-btn" disabled>
            <i class="iconfont icon-a-tupianyihuifu-20"></i>
            娱乐
            <i class="iconfont icon-xiangxia"></i>
          </router-link>
          <ul>
            <li>12</li>
            <li>34</li>
          </ul>
        </div>
        <div class="menu-item">
          <router-link to="/link" class="menu-btn">
            <i class="iconfont icon-link"></i>
            友链
          </router-link>
        </div>
        <div class="menu-item">
          <router-link to="path" class="menu-btn">
            <i class="iconfont icon-about"></i>
            关于
          </router-link>
        </div>
        <div class="menu-item">
          <router-link to="path" class="menu-btn">
            <i class="iconfont icon-message"></i>
            留言
          </router-link>
        </div>
        <div class="menu-item">
          <router-link to="path" class="menu-btn">
            <i class="iconfont icon-denglu"></i>
            登录
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>



</script>

<style lang="scss" scoped>
.mian {
  width: 100%;

  .nav-container {
    height: 60px;
    display: flex;
    padding: 10px 36px;
    justify-content: space-between;
    /* 在主轴两端分布 */
    align-items: center;

    /* 在交叉轴上居中对齐 */
    .right {
      width: 555px;
      align-items: center;
      display: flex;
      justify-content: space-around;
    }
.menu-item{
  position: relative;
  ul{
    position: absolute;
    display: none;
  }
}
    .menu-btn {
      color: black;

      .iconfont {
        font-weight: bold;
        padding-right: 3px;
      }
    }

    .left {
      background-color: green;
    }
  }
}
</style>

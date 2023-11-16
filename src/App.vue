<template>
  <div class="topNavbar">
    <NavBar v-if="isShow"></NavBar>
  </div>
  <router-view>
  </router-view>
</template>
<script setup>
import NavBar from '@/components/navBar.vue'
import { onBeforeMount, onMounted, ref } from 'vue'
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeMount(() => {
  window.removeEventListener('scroll', handleScroll)
})
const isShow = ref(true)
const handleScroll = () => {
  // 在滚动时执行的逻辑

  // 当滚动条位置达到100px时执行某些事情
  if (window.scrollY >= 100) {
    isShow.value = false
  } else {
    isShow.value = true
  }
}
</script>
<style lang="scss" scoped>
.topNavbar {
  position: fixed;
  width: 100%;
}
</style>
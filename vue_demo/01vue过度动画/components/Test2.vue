<template>
  <div>
    <button @click="isShow = !isShow">显示/影藏</button>
    <transition-group
      
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__bounceOutUp"
      appear
    >
      <h1 v-show="isShow" key="1">My name is LiNing</h1>
      <h1 v-show="!isShow" key="2">你好</h1>
    </transition-group>
  </div>
</template>
    
<script>
import "animate.css";
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
    
<style scoped>
h1 {
  background-color: orange;
}
</style>
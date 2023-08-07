<template>
  <div>
    <button @click="isShow = !isShow">显示/影藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">My name is LiNing</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: red;
}
.hello-enter-active {
  animation: akaning 0.5s linear;
}
.hello-leave-active {
  animation: akaning 0.5s linear reverse;
}
@keyframes akaning {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
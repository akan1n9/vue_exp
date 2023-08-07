<template>
  <div>
    <button @click="isShow = !isShow">显示/影藏</button>
    <transition name="hello" appear="">
      <h1 v-show="isShow">My name is LiNing</h1>
    </transition>
  </div>
</template>
  
  <script>
export default {
  name: "Test1",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>
  
  <style scoped>
h1 {
  background-color: blueviolet;
  transition: 0.5s linear;
}
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
}
.hello-enter-to,
.hello-leave {
  transform: translateX(0px);
}
/* @keyframes akaning {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0px);
    }
  } */
</style>
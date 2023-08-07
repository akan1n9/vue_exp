<template>
  <div>
    <h1>子组件收到{{ msg }}</h1>
    <button @click="ctop">emit子传父</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits,ref } from "vue";
const props = defineProps({
  msg: String,
});

const emit = defineEmits(["dadClick"]); //注册一个emit事件
const zichuanfu = {
  name: "儿子",
  age: 18,
};
const ctop = () => {
  // 参数一：事件名，参数二：传给父组件的值
  emit("dadClick", zichuanfu);
};


</script>

<style scoped>
div {
  background-color: red;
}
</style>
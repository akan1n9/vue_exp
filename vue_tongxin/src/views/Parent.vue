<template>
  <p>父组件</p>
  <div>父组件收到 {{ ctod.name }},{{ ctod.age }}</div>
  <div style="background-color: blueviolet">
    <button @click="callChild1">调用child1子组件方法ref/expose</button>
    <p>拿到child1子组件数据 ：{{ refChild1 }}</p>
  </div>
  <!-- props传值 -->
  <Child :msg="message" @dadClick="dadjieshou" />
  <!-- ref/expose -->
  <Child1 ref="rte" />
</template>

<script setup>
import { ref, reactive } from "vue";
import Child from "@/components/Child.vue";
import Child1 from "@/components/Child1.vue";
let message = "父组件props传值";

let ctod = reactive({
  name: "父亲",
  age: 50,
});
const dadjieshou = (data) => {
  console.log(data);
  console.log(ctod);
  ctod.name = data.name;
  ctod.age = data.age;
};

//child1 ref expose
const refChild1 = ref("父组件初始数据");
const rte = ref(null); //通过模板ref锁定子组件child1
const callChild1 = () => {
  console.log(rte.value);
  rte.value.changetxt("使用子组件Child1方法修改后的数据");
  refChild1.value = rte.value.txt;
};
</script>

<style>
</style>
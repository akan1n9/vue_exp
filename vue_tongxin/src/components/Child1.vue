<template>
    <div style="background-color: #ac3434;">
      <h1>child1子组件数据：{{ txt }}</h1>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";

  
  // ref/expose
  const txt = ref('子组件初始数据')
  const changetxt = (data)=>{
    txt.value = data
  }
  // 使用expose暴露方法和数据
  defineExpose({
    txt,changetxt
  })
  </script>
  
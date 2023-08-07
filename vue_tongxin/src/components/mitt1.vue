<template>
  <div style="background-color: #65d14d">
    <h1>我是mitt1</h1>
    <button @click="toMitt2">向mitt2打个招呼</button>
  </div>
</template>

<script setup>
import mitt from "../util/mitt";
let asx = '来自mitt1的你好'
const toMitt2 = ()=>{
    mitt.emit('Hello',asx)
}
</script>

<style scoped>
</style>
<template>
  <div class="child">
    <h2>这是slot子组件</h2>
    <slot>没传值时slot默认值</slot>
  </div>
</template>

<script>
</script>

<style lang="less">
.child {
  background-color: #bd1818;
}
</style>
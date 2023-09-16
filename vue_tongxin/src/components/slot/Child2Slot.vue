<template>
  <div class="child">
    <h3>这是具名插槽子组件</h3>
    <slot name="center">1</slot>
    <slot name="footer">2</slot>
  </div>
</template>
  
  <script>
</script>
  
  <style lang="less">
.child {
  background-color: #4c2487;
}
</style>
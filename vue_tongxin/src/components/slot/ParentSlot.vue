<template >
  <div class="parent">
    <h1>这里是slot父组件</h1>
    <child-slot>
      <img src="../../assets/12212.jpg" alt="" />
      <!-- <img src="../../assets/12212.jpg" alt="" />  -->
    </child-slot>
    <h1>具名插槽demo：</h1>
    <child-2-slot>
      <template v-slot:center>
        <img src="../../assets/213213.jpg" alt="" />
      </template>
      <template v-slot:footer>
        <h4>尝试具名插槽，这里是footer</h4>
      </template>
    </child-2-slot>
  </div>
</template>

<script setup>
import Child2Slot from "./Child2Slot.vue";
import ChildSlot from "./ChildSlot.vue";
</script>

<style lang="less" scoped>
.parent {
  background-color: #26b0de;
}
</style>
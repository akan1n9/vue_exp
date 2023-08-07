
<template>
  <vmodel2 v-model:msg1="message1" v-model:msg2="message2" />
</template>

<script setup>
import { ref } from "vue";
import vmodel2 from "./vmodel2";

const message1 = ref("雷猴");

const message2 = ref("蟑螂恶霸");
</script>

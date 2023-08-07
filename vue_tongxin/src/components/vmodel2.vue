<template>
  <div><button @click="changeMsg1">修改msg1</button> {{msg1}}</div>

  <div><button @click="changeMsg2">修改msg2</button> {{msg2}}</div>
</template>

<script setup>
import { ref,defineEmits,defineProps } from 'vue'

// 接收
const props = defineProps({
  msg1: String,
  msg2: String
})

const emit = defineEmits(['update:msg1', 'update:msg2'])

function changeMsg1() {
  emit('update:msg1', '鲨鱼辣椒')
}

function changeMsg2() {
  emit('update:msg2', '蝎子莱莱')
}

</script>

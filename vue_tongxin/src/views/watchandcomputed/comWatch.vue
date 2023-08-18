<template>
  <div style="background-color: #3b39df">
    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? "Yes" : "No" }}</span
    ><br />
    <span>{{ computedYouhua }}</span
    ><br />
    <span>{{ fangfaYouhua() }}</span
    ><br />
    <span>{{ watchYouhua }}</span>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

const computedYouhua = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});

function fangfaYouhua() {
  return author.books.length > 0 ? "Yes" : "No";
}

// 计算属性缓存 vs 方法:计算属性值会基于其响应式依赖被缓存,一个计算属性仅会在其响应式依赖更新时才重新计算,相比之下，方法调用总是会在重渲染发生时再次执行函数。

const watchYouhua = ref(null);
watch(watchYouhua, () => {
  return (watchYouhua.value = author.books.length > 0 ? "Yes" : "No");
});
</script>

<style>
</style>
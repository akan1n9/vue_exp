import { defineStore } from "pinia";
import { ref, computed } from "vue";
// 下方defineStore函数第一个参数是作为独一无二的id，
export const useNamerStore = defineStore('namer', () => {
    // ref代替state
    const name = ref('雷猴')
    // computed代替getters
    const fullName = computed(() => {
        return "我叫" + name.value
    })
    // function代替actions
    function updateName(newName) {
        name.value = newName
        // console.log(newName);
        // console.log(name.value);
    }

    return { name, fullName, updateName }
})
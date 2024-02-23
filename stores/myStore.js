import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', () => {
    const counter = ref(0)
    const name = ref('Saman')
    const doubleCount = computed (() => counter.value * 2)

    function increment() {
        counter.value++
    }

    return {
        name,
        counter,
        increment,
        doubleCount
    }
})
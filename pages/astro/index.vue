<template>
    <div>
        <ContentDoc />
        <hr>
        {{ counter }}
        <hr>
        <button @click="counter++">counter++</button>
        <button @click="counter--">counter--</button>
    </div>

</template>
<script setup>
const counter = useCounter();
console.log('counter',counter.value);

const counterStore = useCounterStore()
console.log('counterStore', counterStore);
</script>
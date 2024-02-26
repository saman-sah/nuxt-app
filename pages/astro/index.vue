<template>
    <div>
        <h1>edit code in github</h1>
        <ContentDoc />
        <hr>
        {{ counter }}
        <hr>
        <button @click="counter++">counter++</button>
        <button @click="counter--">counter--</button>
    </div>

</template>
<script setup>
const response=await $fetch('/api/hello')
console.log('response',response);
const counter = useCounter();
console.log('counter',counter.value);

const counterStore = useCounterStore()
console.log('counterStore', counterStore);
</script>
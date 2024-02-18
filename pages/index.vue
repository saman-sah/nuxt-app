<template>
    <div class="main-box">
        {{ xValue }} - {{ yValue }}
        <div class="main">
            <img src="/img/background.png" data-speedx="0.3" class="parallax bg-img" :style="computedStyle" />
            <img src="/img/fog_7.png" data-speedx="0.3" class="parallax fog-7" :style="computedStyle" />
            <img src="/img/mountain_10.png" class="parallax mountain-10" :style="computedStyle" />
            <img src="/img/fog_6.png" class="parallax fog-6" :style="computedStyle" />
            <img src="/img/mountain_9.png" class="parallax mountain-9" :style="computedStyle" />
            <img src="/img/mountain_8.png" class="parallax mountain-8" :style="computedStyle" />
            <img src="/img/fog_5.png" class="parallax fog-5" :style="computedStyle"  />
            <img src="/img/mountain_7.png" class="parallax mountain-7" :style="computedStyle" />
            <div class="text parallax">
                <h2>China</h2>
                <h1>Zhangjiajie</h1>
            </div>
            <img src="/img/mountain_6.png" class="parallax mountain-6" :style="computedStyle" />
            <img src="/img/fog_4.png" class="parallax fog-4" />
            <img src="/img/mountain_5.png" class="parallax mountain-5" :style="computedStyle" />
            <img src="/img/fog_3.png" class="parallax fog-3" />
            <img src="/img/mountain_4.png" class="parallax mountain-4" :style="computedStyle" />
            <img src="/img/mountain_3.png" class="parallax mountain-3" :style="computedStyle" />
            <img src="/img/fog_2.png" class="parallax fog-2" />
            <img src="/img/mountain_2.png" class="parallax mountain-2" :style="computedStyle" />
            <img src="/img/mountain_1.png" class="parallax mountain-1" :style="computedStyle" />
            <img src="/img/sun_rays.png" class="sun-rays" />
            <!-- <img src="/img/black_shadow.png" class="black-shadow" />
            <img src="/img/fog_1.png" class="parallax fog-1" /> -->

        
    </div>
    </div>
    
</template>
<script setup>
import {ref, onMounted, reactive} from 'vue'
import { useMouse, useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()
const { x, y } = useMouse()
const xValue = ref(null)
const yValue = ref(null)

const selectedElements = ref([])

    
onMounted(() => {
    selectedElements.value = document.querySelectorAll('.parallax'); 
    //   elements.value = Array.from(selectedElements);
      console.log(selectedElements.value)
  
})

watch(() => [x.value, y.value] ,([newX, newY])=> {
    xValue.value = x.value - (width.value / 2)
    yValue.value = y.value - (height.value / 2)
    selectedElements.value.forEach(element => {
        console.log(element.dataset.speedx);
    })
})

const computedStyle = computed(() => {
    return {
        transform: `translateX(calc(-50% - ${xValue.value}px)) translateY(calc(-50% - ${yValue.value}px))`
    }
}) 
</script>

<style lang="sass" scoped>
.main-box
    width: 100vw
    height: 930px
    overflow: hidden
    margin-bottom: 20em
.main
    width: 100%
    height: 100%
    position: relative
    overflow: hidden
.bg-img
    position: absolute
    width: 140vw
    top: calc(50% - 400px)
    left: calc(50% )
    z-index: 1
.fog-7
    position: absolute
    width: 70vw
    top: calc(50% - 440px)
    left: calc(50% - 450px)
    z-index: 2
.mountain-10
    position: absolute
    width: 500px
    top: calc(50% - 130px)
    left: calc(50% + 150px)
    z-index: 3
.fog-6
    position: absolute
    width: 100vw
    top: calc(50% + 130px)
    left: calc(50% + 300px)
    z-index: 4

.mountain-9
    position: absolute
    width: 400px
    top: calc(50% + 140px)
    left: calc(50% - 700px)
    z-index: 5
.mountain-8
    position: absolute
    width: 700px
    top: calc(50% + 140px)
    left: calc(50% - 230px)
    z-index: 6
.fog-5
    position: absolute
    width: 500px
    top: calc(50% - 130px)
    left: calc(50% + 150px)
    z-index: 7
.mountain-7
    position: absolute
    width: 700px
    top: calc(50% + 60px)
    left: calc(50% + 100px)
    z-index: 8
.mountain-6
    position: absolute
    width: 400px
    top: calc(50% + 20px)
    left: calc(50% + 660px)
    z-index: 10
.fog-4
    position: absolute
    width: 500px
    top: calc(50% - 200px)
    left: calc(50% + 250px)
    z-index: 11
.mountain-5
    position: absolute
    width: 600px
    top: calc(50% + 260px)
    left: calc(50% + 70px)
    z-index: 12
.fog-3
    position: absolute
    width: 500px
    top: calc(50% + 200px)
    left: calc(50% + 250px)
    z-index: 13
.mountain-4
    position: absolute
    width: 800px
    top: calc(50% + 200px)
    left: calc(50% + 375px)
    z-index: 14
.mountain-3
    position: absolute
    width: 400px
    top: calc(50% + 105px)
    left: calc(50% + 830px)
    z-index: 15
.fog-2
    position: absolute
    width: 500px
    top: calc(50% - 200px)
    left: calc(50% + 250px)
    z-index: 16
.mountain-2
    position: absolute
    width: 600px
    top: calc(50% + 190px)
    left: calc(50% - 550px)
    transform: translate(-50%, -50%)
    z-index: 17
.mountain-1
    position: absolute
    width: 400px
    top: calc(50% + 135px)
    left: calc(50% - 835px)
    transform: translate(-50%, -50%)
    z-index: 18
.sun-rays
    position: absolute
    width: 500px
    top: calc(50% - 450px)
    left: calc(50% + 420px)
    transform: translate(-50%, -50%)
    z-index: 19
.black-shadow
    position: absolute
    width: 100vw
    top: calc(50% - 60px)
    left: calc(50% )
    transform: translate(-50%, -50%)
    z-index: 20
.fog-1
    position: absolute
    width: 100vw
    top: calc(50% - 60px)
    left: calc(50% )
    transform: translate(-50%, -50%)
    z-index: 21

.text
    position: absolute
    z-index: 9
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    text-align: center
    text-transform: uppercase
    color: #ffffff
    h2
        font-weight: 100
        font-size: 3rem
    h1
        font-size: 7rem    
    
</style>
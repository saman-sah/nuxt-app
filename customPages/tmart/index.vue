<template>
  <div class="main-box">
    <!-- <h1>{{ $sayHello('Saman') }}</h1> -->
    <IconsBell />
    <div class="main">
      <img
        src="/img/background.png"
        data-speedx="0.3"
        data-speedy="0.28"
        data-speedz="0"
        data-rotation="0"
        class="parallax bg-img"
      >
      <img
        src="/img/fog_7.png"
        data-speedx="0.27"
        data-speedy="0.32"
        data-speedz="0"
        data-rotation="0"
        class="parallax fog-7"
      >
      <img
        src="/img/mountain_10.png"
        data-speedx="0.195"
        data-speedy="0.305"
        data-speedz="0"
        data-rotation="0"
        class="parallax mountain-10"
      >
      <img
        src="/img/fog_6.png"
        data-speedx="0.25"
        data-speedy="0.28"
        data-speedz="0"
        data-rotation="0"
        class="parallax fog-6"
      >
      <img
        src="/img/mountain_9.png"
        data-speedx="0.15"
        data-speedy="0.155"
        data-speedz="0"
        data-rotation="0"
        class="parallax mountain-9"
      >
      <img
        src="/img/mountain_8.png"
        data-speedx="0.1"
        data-speedy="0.11"
        data-speedz="0"
        data-rotation="0"
        class="parallax mountain-8"
      >
      <img
        src="/img/fog_5.png"
        data-speedx="0.16"
        data-speedy="0.105"
        data-speedz="0"
        data-rotation="0"
        class="parallax fog-5"
      >
      <img
        src="/img/mountain_7.png"
        data-speedx="0.1"
        data-speedy="0.1"
        data-speedz="0"
        data-rotation="0"
        class="parallax mountain-7"
      >
      <div
        class="text parallax"
        data-speedx="0.07"
        data-speedy="0.2"
        data-speedz="0"
        data-rotation="0"
      >
        <h2>China</h2>
        <h1>Zhangjiajie</h1>
      </div>
      <img
        src="/img/mountain_6.png"
        data-speedx="0.065"
        data-speedy="0.05"
        data-speedz="0.1"
        data-rotation="0"
        class="parallax mountain-6"
      >
      <img
        src="/img/fog_4.png"
        data-speedx="0.135"
        data-speedy="0.015"
        data-speedz="0.65"
        data-rotation="0"
        class="parallax fog-4"
      >
      <img
        src="/img/mountain_5.png"
        data-speedx="0.08"
        data-speedy="0.065"
        data-speedz="0.43"
        data-rotation="0"
        class="parallax mountain-5"
      >
      <img
        src="/img/fog_3.png"
        data-speedx="0.11"
        data-speedy="0.018"
        data-speedz="0"
        data-rotation="0"
        class="parallax fog-3"
      >
      <img
        src="/img/mountain_4.png"
        data-speedx="0.059"
        data-speedy="0.024"
        data-speedz="0"
        data-rotation="0"
        class="parallax mountain-4"
      >
      <img
        src="/img/mountain_3.png"
        data-speedx="0.04"
        data-speedy="0.018"
        data-speedz="0.32"
        data-rotation="0"
        class="parallax mountain-3"
      >
      <img
        src="/img/fog_2.png"
        data-speedx="0.15"
        data-speedy="0.011"
        data-speedz="0"
        data-rotation="0"
        class="parallax fog-2"
      >
      <img
        src="/img/mountain_2.png"
        data-speedx="0.023"
        data-speedy="0.013"
        data-speedz="0.54"
        data-rotation="0"
        class="parallax mountain-2"
      >
      <img
        src="/img/mountain_1.png"
        data-speedx="0.027"
        data-speedy="0.018"
        data-speedz="0.63"
        data-rotation="0"
        class="parallax mountain-1"
      >
      <img
        src="/img/sun_rays.png"
        class="sun-rays"
      >
      <!-- <img src="/img/black_shadow.png" class="black-shadow" data-speedz="0" data-rotation="0"/>
            <img src="/img/fog_1.png" data-speedx="0.12" data-speedy="0.01" class="parallax fog-1" data-speedz="0" data-rotation="0" /> -->
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
console.log('useNuxtApp', useNuxtApp());
const { $sayHello } = useNuxtApp()
$sayHello('Sahraei')
// import gsap from 'gsap'
// import { useUtils } from '../../composebles/useUtils'
import { useMouse, useWindowSize } from '@vueuse/core'
 const { saySomething } = useUtils()
 saySomething()
definePageMeta({
  layout: 'customLayout'
})

const { width, height } = useWindowSize()
const { x, y } = useMouse()
const xValue = ref(null)
const yValue = ref(null)
const zValue = ref(null)
const rotateDegree = ref(20)

const selectedElements = ref([])
// const computedStyle = computed( {
//         get() {
//             return {
//                 transform: `translateX(calc(-50% - ${xValue.value}px)) translateY(calc(-50% - ${yValue.value}px))`
//             }
//         },
//         set(newValue) {
//             console.log('newValue', newValue)
//         }
//     })
init()
onMounted(async () => {
  // await nextTick()

  selectedElements.value = document.querySelectorAll('.parallax')
  // const timeline = gsap.timeline()
  // selectedElements.value.forEach(element => {
  //     timeline.from(element, {
  //         top: `${ useElementSize(element).height.value / 2 - 200 }px`,
  //         duration: 1
  //     }, "1")
  //     timeline.to(element, {
  //         top: `${ useElementSize(element).height.value / 2 + 200 }px`,
  //         duration: 1
  //     }, "1")
  // })

  init()
})

watch(() => [x.value, y.value], ([newX, newY]) => {
  init()
})

function init () {
  rotateDegree.value = (xValue.value / (width.value / 2)) * 20
  selectedElements.value.forEach(element => {
    const isInLeft = parseFloat(getComputedStyle(element).left) < width.value / 2 ? 1 : -1

    xValue.value = x.value - (width.value / 2)
    yValue.value = y.value - (height.value / 2)
    zValue.value = (x.value - parseFloat(getComputedStyle(element).left)) * isInLeft * 0.3

    const speedx = element.dataset.speedx
    const speedy = element.dataset.speedy
    const speedz = element.dataset.speedz
    const rotationSpeed = element.dataset.rotation
    element.style.transform = `translateX(calc(-50% - ${xValue.value * speedx}px)) 
        rotateY(${rotateDegree.value * rotationSpeed}deg)
        translateY(calc(-50% - ${yValue.value * speedy}px)) 
        perspective(2300px) translateZ( ${zValue.value * speedz}px) `
  })
  // computedStyle.value = computed({
  //     get() {
  //         return {
  //             transform: `translateX(calc(-50% - ${xValue.value * }px)) translateY(calc(-50% - ${yValue.value}px))`
  //         }
  //     },
  //     set(newValue) {
  //         transform: newValue
  //     }
  // })
}

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

.parallax
    pointer-events: none
    transition: 0.45s cubic-bezier(.2, .49, .32, .99)
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

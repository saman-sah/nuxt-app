export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted(el) {
      el.focus()
    }
  })
  return {
    provide: {
      sayHello: (msg) => console.log(`Hello ${msg}`)
    }
  }
})
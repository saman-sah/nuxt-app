export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to)
  console.log(from)
  const isLogedIn = false
  if (isLogedIn) {
    return navigateTo(to.fullPath)
  }
  return navigateTo('/login')
})
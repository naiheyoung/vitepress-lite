<template>
  <div
    class="backToTop fixed bottom-23 right-15 transition-all duration-250 hover:cursor-pointer rounded-full w-8 h-8 hover:bg-[rgba(136,136,136,.5)] text-center leading-[2.375rem] opacity-0"
    @click="backtop">
    <div icon-btn i-pixelarticons:arrow-up></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useScroll, useDebounceFn, useEventListener } from '@vueuse/core'

const backtop = () => {
  document.documentElement.scrollIntoView()
}

onMounted(() => {
  const { arrivedState } = useScroll(document)
  const doSomething = useDebounceFn(() => {
    if (!arrivedState.top) {
      document.querySelector('.backToTop')?.classList.remove('opacity-0')
    } else document.querySelector('.backToTop')?.classList.add('opacity-0')
  }, 250)
  useEventListener(document, 'scroll', () => {
    doSomething()
  })
})
</script>

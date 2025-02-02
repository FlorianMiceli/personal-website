<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { TextRoll as ReactTextRoll } from './ui/text-roll'


const props = defineProps<{
    text: string
    duration?: number
    className?: string
}>()
const TextRollContainer = ref<HTMLElement | null>(null)
let root: any = null

onMounted(() => {
  if (TextRollContainer.value) {
    root = createRoot(TextRollContainer.value)
    root.render(
      React.createElement(ReactTextRoll, {
        children: props.text,
        duration: props.duration,
        className: props.className,
      })
    )
  }
})

onBeforeUnmount(() => {
  if (root) {
    root.unmount()
  }
})
</script>

<template>
  <div ref="TextRollContainer"></div>
</template> 
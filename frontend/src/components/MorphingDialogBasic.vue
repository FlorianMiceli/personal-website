<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { MorphingDialogBasic as ReactMorphingDialogBasic } from './ui/morphing-dialog-basic'

export interface Props {
  title: string
  subtitle: string
  description: string[]
  arenaLink?: string
  imageSrc?: string
  imageAlt?: string
}

const props = defineProps<Props>()
const MorphingDialogContainer = ref<HTMLElement | null>(null)
let root: any = null

onMounted(() => {
  if (MorphingDialogContainer.value) {
    root = createRoot(MorphingDialogContainer.value)
    root.render(
      React.createElement(ReactMorphingDialogBasic, {
        title: props.title,
        subtitle: props.subtitle,
        description: props.description,
        arenaLink: props.arenaLink,
        imageSrc: props.imageSrc,
        imageAlt: props.imageAlt,
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
  <div ref="MorphingDialogContainer"></div>
</template> 
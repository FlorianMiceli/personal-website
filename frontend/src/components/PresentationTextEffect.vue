<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { PresentationTextEffect as ReactPresentationTextEffect } from './ui/presentation-text-effect'

const AnimationComponentContainer = ref<HTMLElement | null>(null)
let root: any = null

onMounted(() => {
    if (AnimationComponentContainer.value) {
        root = createRoot(AnimationComponentContainer.value)
        root.render(
            React.createElement(ReactPresentationTextEffect)
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
    <div ref="AnimationComponentContainer" class="text-white"></div>
</template> 
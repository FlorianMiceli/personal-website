<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
router.push('')
</script>

<template>
    <div class="relative">
        <RisingStars :size=512 />
        <div class="h-screen flex flex-col items-center justify-center">
            <div class="pt-12 px-12 pb-8">
                <PresentationTextEffect />
            </div>
            <div>
                <FancyButton class="mt-4 xl:mt-8" text=" 🚧 Website Work in Progress !" />
            </div>
        </div>
    </div>
</template>

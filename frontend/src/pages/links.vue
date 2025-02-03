<script setup lang="ts">
import TextRoll from '../components/TextRoll.vue'
import MorphingDialogBasic, { type Props as LinkProps } from '../components/MorphingDialogBasic.vue'
import personalWebsitePreview from '../assets/personal_website_preview.png'
import musicMatchingAppPreview from '../assets/polymatch_preview.png'
import activityTrackingPreview from '../assets/activity_tracking_preview.png'


</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center relative py-20">
        <div class="absolute top-24 sm:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-4">
            <TextRoll 
                text="Socials" 
                :duration="0.4" 
                className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white" 
            />
        </div>
        <DockExample />
    </div>

</template>
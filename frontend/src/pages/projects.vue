<script setup lang="ts">
import MorphingDialogBasic, { type Props as LinkProps } from '../components/MorphingDialogBasic.vue'
import personalWebsitePreview from '../assets/personal_website_preview.png'

const links: LinkProps[] = [
    {
        title: "Personal Website",
        subtitle: "Built with Vue 3 + TypeScript",
        description: [
            'A modern, responsive personal website showcasing my projects and experience.',
            'Built with Vue 3, TypeScript, Tailwind CSS, Vite, ...',
        ],
        imageSrc: personalWebsitePreview,
        imageAlt: "Preview of my personal website"
    },
    {
        title: "Upcoming ...",
        subtitle: "...",
        description: [
        ],
        imageAlt: "..."
    }
]
</script>

<template>
    <div class="h-screen flex items-center justify-center gap-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            <MorphingDialogBasic
                v-for="link in links"
                :key="link.title"
                v-bind="link"
            />
        </div>
    </div>
</template>
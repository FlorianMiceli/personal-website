<script setup lang="ts">
import TextRoll from '../components/TextRoll.vue'
import MorphingDialogBasic, { type Props as LinkProps } from '../components/MorphingDialogBasic.vue'
import personalWebsitePreview from '../assets/personal_website_preview.png'
import musicMatchingAppPreview from '../assets/polymatch_preview.png'
import activityTrackingPreview from '../assets/activity_tracking_preview.png'


const links: LinkProps[] = [
    {
        title: "Personal Website",
        subtitle: "You are here !",
        description: [
            'A modern personal website showcasing my projects and experience.',
            'Built with Vue 3, TypeScript, Tailwind CSS, Vite, ...',
        ],
        imageSrc: personalWebsitePreview,
        imageAlt: "Preview of my personal website"
    },
    {
        title: "Music Matching App",
        subtitle: "Work in progress...",
        description: [
        ],
        imageSrc: musicMatchingAppPreview,
        imageAlt: "Preview of my music matching app"
    },
    {
        title: "Activity Tracking App",
        subtitle: "Business Software",
        imageSrc: activityTrackingPreview,
        imageAlt: "Preview of my activity tracking business software",
        description: [
            "A Business Software for R&D companies to comply with French Research Tax Credit.",
            "Currently testing in my current company, Sensome, and planning to launch it as a SaaS.",
            "Built with Vue 3/TypeScript, Node.js",
            "Uses Element Plus for the UI, Tanstack Query for data fetching/caching, Supabase for the database and Vercel for deployment and hosting.",
        ],
    }
]
</script>

<template>
    <div class="h-screen flex flex-col">
        <div class="text-center w-full items-center justify-center pb-20 pt-20 mt-20">
            <TextRoll text="Projects" :duration="0.4"
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white" />
        </div>
        <div
            class="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <MorphingDialogBasic v-for="link in links" :key="link.title" v-bind="link" class="w-full" />
        </div>
    </div>
</template>
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
    <div class="h-screen flex flex-col items-center justify-center relative">
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center">
            <TextRoll text="Projects" :duration="0.4" className="text-9xl font-bold text-white" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            <MorphingDialogBasic
                v-for="link in links"
                :key="link.title"
                v-bind="link"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import linkedinIcon from '@/assets/logos/linkedin.svg'
import instagramIcon from '@/assets/logos/instagram.svg'
import githubIcon from '@/assets/logos/github.svg'
import monkeytypeIcon from '@/assets/logos/monkeytype.svg'
import readcvIcon from '@/assets/logos/readcv.svg'

const links = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/florianmiceli/",
        icon: linkedinIcon,
    },
    {
        name: "ReadCV",
        href: "https://read.cv/florianmiceli",
        icon: readcvIcon,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/f_mcl/",
        icon: instagramIcon,
    },

    {
        name: "GitHub",
        href: "https://github.com/florianmiceli",
        icon: githubIcon,
    },
    {
        name: "MonkeyType",
        href: "https://monkeytype.com/profile/florianmiceli",
        icon: monkeytypeIcon,
    }
]

const openLink = (href: string) => {
    window.open(href, '_blank');
}
</script>
<template>
    <Dock class="mb-6 border-gray-200">
        <DockIcon v-for="link in links" :key="link.name">
            <img :src="link.icon" :alt="link.name" class="h-full w-full object-contain" @click="openLink(link.href)" />
        </DockIcon>
    </Dock>
</template>
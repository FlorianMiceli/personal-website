<script setup lang="ts">
import { ref } from 'vue'
import MobileMenu from './MobileMenu.vue'

const isMenuOpen = ref(false)

const links = [
    { route: 'projects', title: 'Projects' },
    { route: 'links', title: 'Socials' },
    { route: 'tech-stack', title: 'My dev stack' },
    { route: 'upcoming', title: 'Upcoming...' }
]
</script>

<template>
    <el-header
        class="fixed top-0 left-0 right-0 z-50 text-white p-3 m-2 flex items-center bg-white/[0.09] rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5.9px] border border-white/30"
        height="40px">
        <div class="flex-none">
            <el-link :underline="false" class="items-center justify-start text-white mb-0.5" href="/">
                Florian's world✨
            </el-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block grow">
            <el-container class="justify-center">
                <Link v-for="link in links" :key="link.route" :route="link.route" :title="link.title" class="mx-5" />
            </el-container>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden ml-auto">
            <button @click="isMenuOpen = !isMenuOpen"
                class="p-2 rounded-md hover:bg-white/[0.09] transition-colors duration-200" aria-label="Toggle menu">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </el-header>

    <!-- Mobile Menu -->
    <MobileMenu :is-open="isMenuOpen" :links="links" @close="isMenuOpen = false" />
</template>

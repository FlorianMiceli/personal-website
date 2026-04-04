<script setup lang="ts">
import { Analytics } from "@vercel/analytics/vue"
</script>
<template>
    <Analytics />
    <Header />
    <Rays />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
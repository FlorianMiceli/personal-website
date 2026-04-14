<script setup lang="ts">
import { Analytics } from "@vercel/analytics/vue"
import { SpeedInsights } from "@vercel/speed-insights/vue"
</script>
<template>
    <Analytics />
    <SpeedInsights />
    <Header />
    <Rays />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
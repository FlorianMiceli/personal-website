<script setup lang='ts'>
defineProps<{
    route: string
    title: string
}>()
</script>
<template>
    <router-link
        :to="route"
        class="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
        :class="{ 'text-white': $route.path === `/${route}` }"
    > 
        {{ title }}
    </router-link>
</template>
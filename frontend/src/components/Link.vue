<script setup lang='ts'>
defineProps<{
    route: string
    title: string
}>()
</script>
<template>
    <el-link
        :underline="false"
        :type="$route.name === `/${route}` ? '' : 'info'"
        :href="`/${route}`"
    > 
            {{ title }}
    </el-link>
</template>
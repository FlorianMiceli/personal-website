<script setup lang="ts"></script>
<template>
    <Header />
    <Rays />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
</template>
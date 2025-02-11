<script setup lang="ts">
defineProps<{
    isOpen: boolean
    links: Array<{
        route: string
        title: string
    }>
}>()

defineEmits<{
    (e: 'close'): void
}>()
</script>

<template>
    <Transition enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-2 opacity-0" enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in" leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0">
        <div v-if="isOpen" class="fixed inset-x-0 top-[48px] p-2 z-40">
            <div
                class="rounded-lg bg-white/[0.0009] shadow-lg backdrop-blur-[5.9px] border border-white/30 overflow-hidden">
                <div class="pt-2 pb-4">
                    <div class="flex flex-col space-y-3 px-4">
                        <Link v-for="link in links" :key="link.route" :route="link.route" :title="link.title"
                            class="text-center py-2 rounded-md transition-colors duration-200 text-white font-bold text-lg"
                            @click="$emit('close')" />
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

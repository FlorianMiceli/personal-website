<script setup lang="ts">
import { useRouter } from 'vue-router'
import PresentationTextEffect from '../components/PresentationTextEffect.vue'
import RisingStars from '../components/stunning/RisingStars.vue'
const router = useRouter()
router.push('')
</script>

<template>
    <el-main>
        <RisingStars :size=512 />
        <div class="top">
            <PresentationTextEffect />
        </div>
        <FancyButton class="mt-8" text=" 🚧 Website Work in Progress !" />
    </el-main>
</template>

<style scoped>
.top {
    margin-top: 20vh;
    margin-bottom: 5vh;
}

.content {
    margin-top: 2rem;
    font-size: 1.2rem;
}

.desc {
    font-size: 58px;
    margin-top: 10%;
    text-align: justify;
    text-justify: inter-word;
}
</style>

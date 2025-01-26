<script setup lang="ts">
import { useRouter } from 'vue-router'
import PresentationTextEffect from '../components/PresentationTextEffect.vue'

const router = useRouter()
router.push('')
</script>

<template>
    <el-main>
        <div class="top">
            <PresentationTextEffect />
        </div>
        
        <div class="content text-[#ffffff]">
            Take a look at the content below 👇
        </div>

        <div>
            <h1 class="text-5xl font-bold text-[#ffffff]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas, sed cumque quisquam aut debitis, magni obcaecati nulla qui expedita officiis rerum porro nisi repellendus repellat velit doloribus esse explicabo!</h1>
            <h1 class="desc text-[#ffffff]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas, sed cumque quisquam aut debitis, magni obcaecati nulla qui expedita officiis rerum porro nisi repellendus repellat velit doloribus esse explicabo!</h1>
            <h1 class="desc text-[#ffffff]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas, sed cumque quisquam aut debitis, magni obcaecati nulla qui expedita officiis rerum porro nisi repellendus repellat velit doloribus esse explicabo!</h1>
        </div>
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

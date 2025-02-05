<template>
    <el-header
        class="fixed top-0 left-0 right-0 z-50 text-white p-3 m-2 flex items-center bg-white/[0.09] rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5.9px] border border-white/30"
        height="40px"
    >
        <el-link :underline="false" class="flex items-center justify-start text-white mb-0.5" href="/">
            Florian's world✨
        </el-link>

        <el-container class="justify-center">
            <Link route="links" title="Socials" class="mx-5" />
            <Link route="projects" title="Projects" class="mx-5" />
            <Link route="tech-stack" title="My dev stack" class="mx-5" />
            <Link route="upcoming" title="Upcoming..." class="mx-5" />
        </el-container>

        <el-button 
            type="primary" 
            size="small"
            class="-mx-[5px] rounded-[5px] bg-white/[0.09] border border-white/30 text-white font-[system-ui,sans-serif]"
        >
            action
        </el-button>
    </el-header>
</template>

<template>
    <el-header class="header" height="40px">
        <el-link :underline="false" class="title" href="/">Florian's world✨</el-link>

        <el-container class="links">
            <Link route="links" title="Socials" class="link" />
            <Link route="projects" title="Projects" class="link" />
            <Link route="tech-stack" title="My dev stack" class="link" />
            <Link route="upcoming" title="Upcoming..." class="link" />
        </el-container>

        <el-button type="primary" size="small" class="action-button">action</el-button>
    </el-header>
</template>

<style scoped>
.header {
    color: white;
    padding: 12px;
    margin: 4px;
    align-items: center;
    display: flex;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.title {
    align-items: center;
    justify-content: left;
    color: rgba(255, 255, 255);
    margin-bottom: 2px;
}

.links {
    justify-content: center;
}

.link {
    margin-inline: 20px;
}

.action-button {
    margin-inline: -5px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.09);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    font-family: system-ui, sans-serif;
}
</style>
```

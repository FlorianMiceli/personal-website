<template>
  <Header />
  <el-main> 
    <h1>
      
    </h1>
  </el-main>
  <Rays class="rayslight" />
</template>

<style scoped>
.header {
  /* text color white */
  color: white;
  padding: 12px;
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

/* .el-container {
  border: 1px solid white;
} */

.links {
  justify-content: center;
}

.link{
  margin-inline: 20px;

}

.action-button {
  margin-inline: -5px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-family:system-ui, sans-serif;
}


</style>

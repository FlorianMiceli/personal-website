<script setup lang="ts">
// import Edit from "@element-plus/icons-vue"
import { Edit } from '@element-plus/icons-vue'
</script>
<template>
  <Header />
  <Rays/>

  <el-divider></el-divider>
  <el-divider></el-divider>
  <el-main>
    <!-- <el-empty description="Nothing here" class="empty" /> -->
    <!-- <h1 class="desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt
      porro deserunt rem dolorum, facilis labore architecto delectus laborum
      odio similique expedita esse numquam itaque voluptas molestias eveniet
      deleniti eaque!
    </h1> -->
      <el-text class="desc">
  
        Hi👋, I'm Florian, trainee software engineer based in France. I'm
        currently working at   
      
  
        <el-link type="info" class="link" href="https://www.sensome.com">
          <el-icon class="el-icon--left">
            <div class="logo"><img src="./assets/sensome_logo.svg" alt="Sensome Logo" width="45" /></div>
          </el-icon>
          <el-text class="link-text">
            Sensome
          </el-text>
        </el-link>

        , helping to save lives. Learning Computer Science at
  
        <el-link type="info" style="margin-left: 2.4%; margin-right: -17px" href="https://www.polytech.universite-paris-saclay.fr/">
          <el-icon>
            <div class="logo"><img src="./assets/polytech_logo.svg" alt="Polytech Logo" width="42" /></div  >
          </el-icon>
          <el-text class="link-text">
            Polytech Paris-Saclay
          </el-text>
        </el-link>
        .
      </el-text>
      <el-divider></el-divider>
      Take a look at the content below 👇


      <h1 class="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas,
        sed cumque quisquam aut debitis, magni obcaecati nulla qui expedita
        officiis rerum porro nisi repellendus repellat velit doloribus esse
        explicabo!
      </h1>
    <h1 class="desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas,
      sed cumque quisquam aut debitis, magni obcaecati nulla qui expedita
      officiis rerum porro nisi repellendus repellat velit doloribus esse
      explicabo!
    </h1>
    <h1 class="desc">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quas,
      sed cumque quisquam aut debitis, magni obcaecati nulla qui expedita
      officiis rerum porro nisi repellendus repellat velit doloribus esse
      explicabo!
    </h1>
  </el-main>
</template>

<style scoped>
.logo {
  margin-bottom: 4px !important;
  margin-right: 160%;
}

.link {
  margin-left: 2.4%;
}

.link-text {
  color: #909399;
  font-size: 58px;
  margin-top: -11px;
  margin-left: 12px
}

.desc {
  font-size: 58px;
  margin-top: 150px;
}
</style>

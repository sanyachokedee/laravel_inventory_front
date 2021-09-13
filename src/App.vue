<template>
  <!-- <div> -->
    <!-- router-link เหมือน href -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- การเรียกผ่านช่ือ ถ้ามีการเปลี่ยน url ก็ยังทำงานได้เพราะใช้ name 
        ใส่ : คือ blind to 
    -->

    <!-- <router-link :to="{ name: 'About' }">About</router-link> -->
  <!-- </div> -->
  <h1> {{ brand}} </h1>
  <router-view />    <!-- ไว้โหลดข้อมูล -->
</template>

<script>

let brand = " | "+ process.env.VUE_APP_TITLE //เรียกผ่านตัวแปร 
// let brand = " | Inventory Vue SPA" 

export default {
  name :'App',

  watch: {
    $route(to){
      // ชื่อ to คือ ตัวแปรในการรับค่าตรงๆ มาให้แล้วนำไปใช้ตั้งชื่ออะไรก็ได้
      document.title = to.meta.title + brand,
      document.description = to.meta.description
    }
  }
}
</script>

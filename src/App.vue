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
  <router-view />    <!-- ไว้โหลดข้อมูล -->
</template>

<script>
export default {
  name :'App'
}
</script>

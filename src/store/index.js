import { createStore } from 'vuex'

export default createStore({
  // State คือ พื้นที่สำหรับการเก็บตัวแปร object หรือ ค่าต่างๆ ของแอพเราไว้ ด้วย key value
  state: {
    counter: 0,
    sum: 1000,
    showSideMenu : true
  },

  // ฟังก์ชั่่นเพื่อเปลี่ยนแปลง ใน state
  mutations: {
    // ฟังก์ชั่น เพิ่มค่า counter
    increment(state) {
      state.counter++
    },

    // ฟังก์ชั่น ลดค่า counter
    decrement(state) {
      state.counter--
    },

    // ซ่่อนแสดงเมนู ด้านข้าง
    toggleSideMenu(state) {
      state.showSideMenu = !state.showSideMenu
    }
   
  
  },
  actions: {
  },
  modules: {
  }
})

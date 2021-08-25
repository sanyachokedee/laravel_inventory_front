module.exports = {
    //กรณี build ถ้า host จริงมักไม่มีปัญหา แต่ถ้าเป็นจำลอง ต้องระะบุชื่อ Folder ด้วย จะมีผลในการลิงค์ไฟล์จากโฟลเดอร์ต่างๆ
    // publicPath: process.env.NODE_ENV === 'production' ? '/demovuejs' : '/'
    publicPath: process.env.NODE_ENV === 'production' ? '/': '/'
}
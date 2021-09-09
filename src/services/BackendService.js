import axios from "axios";



// อ่านตัวแปร userStorage

// let token = ''  // ให้เป็นค่าว่างไว้ก่อน

// if (localStorage.getItem('user')) {

//     let userStorage = localStorage.getItem('user')
//     // แปลง json ให้เป็น array ด้วย parse
//     let userStorageJSON = JSON.parse(userStorage)
//     // เอาข้อมูล token มาใช้
//     token = userStorageJSON['token']    
// } else {
//     // ถ้าไม่มีข้อมูลใน localStorage ให้ token ว่างๆ
//     token = ''
// }


const BackendService = axios.create({
    baseURL: "http://localhost:8000/api/",
    // baseURL: "https://7639-184-22-83-152.jp.ngrok.io/api/",
    withCredential: true,
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer ${token}`
    },
});

// การใช้ interceptors เพื่อแทรก token เข้าใน header
BackendService.interceptors.request.use(config => {
    
    // อ่าน token จาก localStorage
    let token = ''  // ให้เป็นค่าว่างไว้ก่อน

    try{
        let userStorage = localStorage.getItem('user')
        // แปลง json ให้เป็น array ด้วย parse
        let userStorageJSON = JSON.parse(userStorage)
        // เอาข้อมูล token มาใช้
        token = userStorageJSON['token']    

    }catch(error) {
        console.log(error);
    }

    // เช็กว่าถ้า token ไม่ null
    if(token) {
        config.headers.Authorization = "Bearer "+ token
    }

    return config
})

export default BackendService;
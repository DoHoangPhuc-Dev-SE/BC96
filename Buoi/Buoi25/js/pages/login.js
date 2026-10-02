// email/ password/ loginForm

import { loginUser } from "../services/userService.js"

//  chuẩn bị dom HTML
const loginForm = document.querySelector("#loginForm")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")


loginForm.addEventListener("submit" , async (event)=>{
    event.preventDefault()// chặn reload trang 
    console.log("✅ label");
    // trim() cắt khoản trắng đầu và đuôi
    //
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const payload  = {
        email, 
        password
    }
    console.log("👉 payload", payload);
    // có payload đúng chuẩn của api rồi thì gọi service login
    var res = await loginUser(payload)
    alert(`login thành công . Xin chào ${res.email}`)
})
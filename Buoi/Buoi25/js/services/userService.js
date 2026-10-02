import { USER_URL } from "../config.js";

export async function loginUser(payload){
    
    console.log("👉 payload", payload);
    var res = await axios.post(`${USER_URL}/signin`,payload)
    return res.data.content
}
// email : bc96@gmail.com
// pass : string
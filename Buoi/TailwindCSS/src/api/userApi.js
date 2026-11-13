import api from "./axios"

const userApi = {
    getDetailApi: (email) => { 
        return api.get(`/Users/detail?email=${email}`)
     }
}
export default userApi
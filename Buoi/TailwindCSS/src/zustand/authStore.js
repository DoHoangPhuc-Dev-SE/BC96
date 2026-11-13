import { create } from "zustand";
import api from "../api/axios.js";
import userApi from "../api/userApi.js";

export const useAuth = create((set) => {
  return {
    isCheckingAuth: true, //
    userInfo: null,

    getInfo: async () => {
      try {
        const res = await api.post("/Users/getProfile");
        // lấy email từ res.data.content.email để gọi userapi.getDetailApi
        const email = res.data.content.email
        const detail = await userApi.getDetailApi(email)


        console.log({ res });
        console.log(res.data.content);
        set({
          userInfo:{
            ...res.data.content,
            ...detail.data.content
          } ,
          isCheckingAuth: false,
        });
      } catch (error) {
        console.log(error);
        
        set({
          userInfo: null,
          isCheckingAuth: false,
        });
      }
    },

    logout: () => {
      localStorage.clear()
      set({
        userInfo: null,
        isCheckingAuth: false,
      });
      window.location.href = "/login";
    },
  };
});

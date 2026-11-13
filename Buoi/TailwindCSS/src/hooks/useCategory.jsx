// sử dùng custom hook, tanstank query
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import productApi from '../api/productApi'
// custom hook lấy ds category từ server
// tankstack query tự quản lý loading, error, data, cache,..
export default function useCategory() {
  return useQuery({
    // giống như key của localstorage , 
    // là tên định danh của dữ liệu, để các component khác có thể dùng chung dữ liệu mà không cần gọi lại api
    queryKey:["product-categories"],

    // hàm gọi api lấy dữ liệu và trả dữ liệu cần dùng
    queryFn:async()=>{
        const res = await productApi.getCategoryApi();
        return res.data.content // return giá trị vào data
    },
    // thời gian cache
    staleTime: 5 *30 *1000, // cache du lieu tỏng vong 5p
  })
}

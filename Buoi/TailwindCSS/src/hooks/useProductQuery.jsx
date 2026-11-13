import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import productApi from '../api/productApi'

export function useProductPaging(pageIndex, pageSize, keywords) {

    // query : lay du lieu : GET
    // index : 1, size:10 , keywords:"" => 1 cache
    // index : 2, size:10 , keywords:"" => 1 cache
    // index : 2, size:10 , keywords:"adidas" => 1 cacshe
    // nike , puma, ad, rek, 
    // ádi 
//
  return useQuery({
    queryKey:["product-paging",pageIndex, pageSize, keywords],
    queryFn: async()=>{
        const res = await productApi.getPaging(pageIndex,pageSize, keywords)
        return res.data.content
    },
    // staleTime:0,// không lưu
    // không cần luư cache, luoon luon lấy từ api
    // refetchOnMount: "always" // khi component mount thì gọi lại api
    placeholderData: keepPreviousData, // giữ lại dữ liệu cũ khi đang load dữ liệu mới
  })
}

// useMutation :
// thêm mới sp
// dùng cho tha tác làm thay đổi dữ liệu trên server : POST, PUT, DELETE
export function useProductMutations() {
    // điều kiểmt cache trong tántack query
    const queryClient = useQueryClient();
// queryClient.
    const refesh = ()=>{
         queryClient.invalidateQueries({
            queryKey: ["product-paging"]
         })
    }

  const addProductMutation = useMutation({
    mutationFn: (obj)=> productApi.addProductApi(obj),
    // mutationFn thành công thì gọi onSuccess
    onSuccess: refesh
  })
  return {addProductMutation}
}



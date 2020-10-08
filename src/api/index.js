import axios from "@/utils/axios";

export const getPostsApi = page => axios.get(`/posts.json?page=${page}`)
export const deletePostApi = id => axios.post(`/posts/${id}.json`)
export const addPostApi = data => axios.post(`/posts.json`, data)
import axios from "@/utils/axios";

export const getPostsApi = page => axios.get(`/posts.json?page=${page}`)
export const deletePostApi = id => axios.delete(`/posts/${id}.json`)
export const addPostApi = data => axios.post('/posts.json', data)
export const updatePostApi = (id, data) => axios.post(`/posts/${id}.json`, data)
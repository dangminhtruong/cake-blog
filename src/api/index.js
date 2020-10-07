import axios from "@/utils/axios";

export const getPostsApi = page => axios.get(`/posts.json?page=${page}`)
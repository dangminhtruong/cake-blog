import {getPostsApi} from '@/api'
import { message } from '@/utils/message.js';

const state = {
    posts: [],
    pagination: {
        maxPages: 1,
        currentPage: 1
    }
}

// getters
const getters = {}

// actions
const actions = {
    async getPosts({commit}, page){
        try{
            const {data} = await getPostsApi(page)
            commit('SET_POSTS', {data: data, currentPage: page})
        }catch(_){
            message('Unable to load posts data.', 'error')
        }
    }
}

// mutations

const mutations = {
    SET_POSTS(state, {data, currentPage}){
        state.posts = data.posts
        state.pagination.currentPage = currentPage
        state.pagination.maxPages = data.maxPages
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
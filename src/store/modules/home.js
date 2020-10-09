import {getPostsApi, deletePostApi, addPostApi, updatePostApi} from '@/api'
import { message } from '@/utils/message.js';
import Vue from 'vue'

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
    },

    async deletePost({commit}, id){
        try{
            const {data} = await deletePostApi(id)
            commit('SET_POSTS', {data: data})
            message('Delete post successfully.', 'success')
        }catch(e){
            message('Unable to delete this posts.', 'error')
        }
    },

    async addPost({commit}, form){
        try{
            const {data} = await addPostApi(form)
            commit('SET_POSTS', {data: data})
            message('Add post successfully.', 'success')
        }catch(e){
            message('Unable to add this posts.', 'error')
        }
    },

    async updatePost({commit}, {id, form}){
        try{
            await updatePostApi(id, form)
            commit('UPDATE_POST', {id, form})
            message('Update post successfully.', 'success')
        }catch(e){
            message('Unable to add this posts.', 'error')
        }
    }
}

// mutations

const mutations = {
    SET_POSTS(state, {data, currentPage}){
        const {pagination} = state
        Vue.set(state, 'posts', data.posts)
        if(currentPage)
            state.pagination.currentPage = currentPage
        else if(pagination.currentPage > data.maxPages)
            state.pagination.currentPage = pagination.currentPage - 1
        state.pagination.maxPages = data.maxPages
    },

    DELETE_POST(state, id){
        const index = state.posts.findIndex(item => item.Post.id == id)
        state.posts.splice(index, 1)
    },

    UPDATE_POST(state, {id, form}){
        const index = state.posts.findIndex(item => item.Post.id == id)
        const {type, content} = form

        switch(type){
            case 'title':
                state.posts[index].Post.title = content
                break;
            case 'avatar': 
                state.posts[index].Post.avatar = content
                break;
            case 'description':
                state.posts[index].Post.description = content
                break;
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
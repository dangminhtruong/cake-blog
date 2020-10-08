<template>
    <div class="container">
        <Top/>
        <Header/>
        <div v-for="(item, index) in posts" :key="`post${index}`"> 
            <Post :post="item.Post"
                @open-add="isOpenAdd = true"
            />
        </div>
        <Pagination :maxPages="pagination.maxPages"
            :currentpage="pagination.currentPage"
        />
        <Footer />
        <Add :isOpenAdd="isOpenAdd"
            @open-add="isOpenAdd = true"
            @close-add="isOpenAdd = false"
        />
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from '@/components/Header.vue'
import Top from '@/components/Top.vue'
import Post from '@/components/Post.vue'
import Pagination from '@/components/Pagination.vue'
import Footer from '@/components/Footer.vue'
import Add from '@/components/Add.vue'

export default {
    components: {Header, Top, Post, Pagination, Footer, Add},
    data(){
        return {
            isOpenAdd: false
        }
    },
    computed: {
        ...mapState('home', ['posts', 'pagination']),
    },
    mounted(){
        this.$store.dispatch('home/getPosts', 1)
    }
}
</script>
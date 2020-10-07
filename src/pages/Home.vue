<template>
    <div class="container">
        <Top/>
        <Header/>
        <div v-for="(item, index) in posts" :key="`post${index}`"> 
            <Post :post="item.Post"/>
        </div>
        <Pagination 
            :maxPages="pagination.maxPages"
            :currentpage="pagination.currentPage"
        />
        <Footer />
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from '@/components/Header.vue'
import Top from '@/components/Top.vue'
import Post from '@/components/Post.vue'
import Pagination from '@/components/Pagination.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {Header, Top, Post, Pagination, Footer},
    computed: {
        ...mapState('home', ['posts', 'pagination']),
    },
    mounted(){
        this.$store.dispatch('home/getPosts', 1)
    }
}
</script>
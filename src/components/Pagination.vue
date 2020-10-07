<template>
    <div class="main">
        <div class="pagination">
            <div class="pagination_item" 
                v-for="item in maxPages" 
                :key="`pagin${item}`"
                :class="{ 'pagination_active': item == currentpage }"
                @click="goToPage(item)"
            >
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['maxPages', 'currentpage'],
    methods: {
        goToPage(item){
            this.$store.dispatch('home/getPosts', item)
        }
    }
}
</script>
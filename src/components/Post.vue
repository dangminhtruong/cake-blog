<template>
    <div class="main">
        <article class="main_post">
            <div class="entry">
                <div class="entry_date">
                    12
                    <span>Nov</span>
                </div>
                <div class="entry_group">
                    <PostTitle :post="post"/>
                    <p class="entry_group_meta">
                        By <span>Truong Dang</span> in<a> #Laravel</a>
                    </p>
                </div>
            </div>
            <div class="main_post_background" 
                v-bind:style="{ backgroundImage: `url(${post.avatar})` }"
            >
                <div class="action">
                    <div class="action-item" @click="$emit('open-add')">
                        <i class="el-icon-plus"></i>
                    </div>
                    <el-popconfirm 
                        title="Are you sure to delete this post?" 
                        confirmButtonText='OK'
                        cancelButtonText='No, Thanks'
                        icon="el-icon-info"
                        iconColor="red"
                        @onConfirm="deletePost"
                    >
                        <div slot="reference" class="action-item">
                            <i class="el-icon-delete"></i>
                        </div>
                    </el-popconfirm>
                    
                    <div class="action-item">
                        <i class="el-icon-edit"></i>
                    </div>
                </div>
            </div>
            <Description :post="post"/>
            <div class="main_post_footer">
            <div class="main_post_footer_wrapper">
                <a href="#">
                    <span></span>
                    Read More
                </a>
                <ul class="main_post_footer_wrapper_share">
                    <li class="should_bold">Share</li>
                    <li><i class="fab fa-facebook-square"></i></li>
                    <li><i class="fab fa-linkedin"></i></li>
                    <li><i class="fab fa-twitter-square"></i></li>
                </ul>
            </div>
            </div>
        </article>
    </div>
</template>

<script>
import PostTitle from '@/components/PostTitle.vue'
import Description from '@/components/Description.vue'

export default {
    props: ['post', 'open-add'],
    components: {PostTitle, Description},
    methods: {
        deletePost(){
            this.$store.dispatch('home/deletePost', this.post.id);
        }
    }
}
</script>

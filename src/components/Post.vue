<template>
    <div class="main">
        <article class="main_post">
            <div class="entry">
                <div class="entry_date">
                    12
                    <span>Nov</span>
                </div>
                <div class="entry_group">
                    <h2 class="entry_group_title">
                    <a href="#">{{ post.title }}</a>
                    </h2>
                    <p class="entry_group_meta">
                    By <span>Truong Dang</span> in<a> #Laravel</a>
                    </p>
                </div>
            </div>
            <div class="main_post_background" v-bind:style="{ backgroundImage: 'url(' + post.avatar + ')' }"></div>
            <div class="main_post_body">
            <p>{{ post.description }}</p>
            </div>
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
export default {
    props: ['post'],
}
</script>

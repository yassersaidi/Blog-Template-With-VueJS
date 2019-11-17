<template>
    <div class="coding min-vh-100 b-back">
        <div class="container">
             <h2>{{ pageName }}</h2>
             <p>{{ pageDes }}</p>
             <div class="row">
                    <div class="col-md-8 coding-posts text-left">
                        <Post v-for="post in posts" :key="post.id" 
                            :id="post.id" 
                            :user_id="post.user_id"
                            :title="post.post_title" 
                            :date="post.post_updated_at" 
                            :views="post.post_views" 
                            :text="post.post_text" 
                            :auther="post.post_auther" 
                            :category="post.post_category"
                        />
                    </div>
                    <div class="col-md-4 coding-sidebar text-left">
                        <CodingSidebar />
                    </div>
             </div>
        </div>
    </div>
</template>
<script>

import  Post  from "@/components/global/Post";
import  CodingSidebar  from "@/components/coding/CodingSidebar";
import  CodingPosts from "@/json/users_posts.json";

export default {
    data() {
        return {
            pageName:'Coding Blog',
            pageDes:'Welcom to Coding Blog' , 
            posts: CodingPosts
        }
    },
    name:'coding',
    components:{
        Post,
        CodingSidebar
    }
}
</script>
<style scoped lang="scss">
    .coding{
        padding-top:20px;
    }
</style>

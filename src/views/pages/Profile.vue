<template>
  <div class="profile mt-3">
    <div class="container">
      <ProfileInfo 
      :userName="currentUserId.first_name+' '+currentUserId.last_name"
      :follows="currentUserId.followers_number"
      :posts="currentUserId.posts_number"
      :rating="currentUserId.rating"
      />
      <div class="ps row mt-3">
        <div class="cont col-lg-5">
          <ProfileRate :userName="currentUserId.first_name+' '+currentUserId.last_name"
          :rate="currentUserId.rating"/>
          <ProfileMoreInfo :gender="currentUserId.gender" :addres="currentUserId.address" :email="currentUserId.email" :job="currentUserId.job" class="text-left mt-3 mb-3" />
        </div>
        <div class="col-lg-7">
          <h4 class="header-post-info m-0">
            <i class="fa fa-text"></i> {{ currentUserId.first_name+' '+currentUserId.last_name }} posts
          </h4>
          <div class="posts-holder" id="postHolder">
            <Post
              class="text-left"
              v-for="post in userPosts"
              :key="post.id"
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
        </div>
      </div>
      <b-pagination
        v-model="currentPage"
         align="center"
        :total-rows="postsRows"
        :per-page="perPage"
        aria-controls="postHolder"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import ProfileInfo from "@/components/global/ProfileInfo";
import ProfileMoreInfo from "@/components/global/ProfileMoreInfo";
import ProfileRate from "@/components/profile/ProfileRate";
import Post from "@/components/global/Post";
import UserPostsJson from "@/json/users_posts.json";
import UserListJson from "@/json/users_list.json";
export default {
  name: "profile",
  components: {
    ProfileInfo,
    ProfileRate,
    ProfileMoreInfo,
    Post
  },
  data() {
    return {
      userPosts: UserPostsJson,
      usersList: UserListJson,
      currentUserId:[],
      perPage: 3,
      currentPage: 1,
      userID: this.$route.params.pathMatch
    };
  },
  methods: {
  },
  computed: {
      postsRows() {
        return this.userPosts.length
      }
  },
  mounted() {
      let myUsers = this.usersList ;
      for (let index = 0; index < myUsers.length; index++) {
        const element = myUsers[index];
        if(element.id == this.userID){
         this.currentUserId = element ;
        }
      }
  },
};
</script>
<style lang="scss" scoped>
.header-post-info {
  padding: 19px;
  background: #ffffff;
  color: #2c3e50;
  font-weight: 800;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.posts-holder {
  background: #fff;
  padding: 1px 19px;
}
</style>
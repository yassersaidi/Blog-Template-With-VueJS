<template>
  <div class="coding-sidebar-v">
    <div class="most-views mb-4 tab">
      <div @click="tabs.tab1.show = !tabs.tab1.show" class="header_c d-flex align-items-center w-100 justify-content-between tab-button" role="button">
        <span>
          Most Views
          <i class="fa fa-eye"></i>
        </span>
        <span v-if="!tabs.tab1.show">
          <i class="fa fa-chevron-down"></i>
        </span>
        <span v-else>
          <i class="fa fa-chevron-up"></i>
        </span>
      </div>
      <MostViews :class="tabs.tab1.show ? 'd-block' : 'd-none'" v-for="post in most_views" 
        :key="post.id"
        :user_id="post.user_id"
        :post_auther="post.post_auther"
        :post_text="post.post_text"
        :post_views="post.post_views"/>
    </div>
    <div class="active-user mb-4 tab">
      <div @click="tabs.tab2.show = !tabs.tab2.show" class="header_c d-flex align-items-center w-100 justify-content-between tab-button">
        <span>
          Active Users 
          <i class="fa fa-user"></i>
        </span>
        <span v-if="!tabs.tab2.show">
          <i class="fa fa-chevron-down"></i>
        </span>
        <span v-else>
          <i class="fa fa-chevron-up"></i>
        </span>
      </div>
      <ActiveUsers  :class="tabs.tab2.show  ? 'd-block' : 'd-none'" v-for="user in active_users" 
        :key="user.id"
        :user_id="user.user_id"
        :user_name="user.post_auther"
        :user_views="user.post_views"
      />
    </div>
    <div class="active-categories mb-4 tab">
      <div @click="tabs.tab3.show = !tabs.tab3.show" class="header_c d-flex align-items-center w-100 justify-content-between tab-button">
        <span>
          Categories
          <i class="fa fa-filter"></i>
        </span>
         <span v-if="!tabs.tab3.show">
          <i class="fa fa-chevron-down"></i>
        </span>
        <span v-else>
          <i class="fa fa-chevron-up"></i>
        </span>
      </div>
      <ul class="list-inline" :class="tabs.tab3.show  ? 'd-block' : 'd-none'">
        <ActiveCategoris   v-for=" active_categorie in active_categories" 
            :key="active_categorie.id"
            :category="active_categorie.post_category"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import MostViews from "@/components/coding/SideBarContent/MostViews";
import ActiveUsers from "@/components/coding/SideBarContent/ActiveUsers";
import ActiveCategoris from "@/components/coding/SideBarContent/ActiveCategoris";

import MostViewJson from "@/json/most_view_posts.json";
import ActiveUsersJson from "@/json/active_users.json";
import ActiveCategorisJson from "@/json/active_users.json";


export default {
  data() {
      return {
          most_views : MostViewJson ,
          active_users: ActiveUsersJson,
          active_categories: ActiveCategorisJson,
          tabs_show:false,
          tabs:{
            "tab1":{
              "show":false
            },
            "tab2":{
              "show":false
            },
            "tab3":{
              "show":false
            }
          }
            
          
      }
  },  
  name: "coding_sidebar",
  components: {
    MostViews,
    ActiveUsers,
    ActiveCategoris
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
    /* Side Bar vars */
    //$coding-side-bar-background: #E0E0E0 ;
       $header-c-color: #FFF ;

    .coding-sidebar-v {
    margin: 25px 0 0;
    border-radius: 3px;
    }
    .tab{
        padding: 0 0 19px;
        .tab-button{
            padding: 9px;
            color: $header-c-color;
            border-radius: 5px 5px 0 0;
            cursor:pointer;
            &:active{
              opacity: 0.7
            }
        }
    }

     /* Most View Template vars */
    $most-views-background: #E0E0E0 ;
    $header-c-background: #43A047 ;
 

    .most-views{
        background: $most-views-background;
        border-bottom: 1px solid $header-c-background;
        .header_c{
            background: $header-c-background;
        }
    }

     /* Active Users Template vars */
    $active-user-background: #E0E0E0 ;
    $header-c-background: #2196F3; ;
    $header-c-color: #FFF ;

    .active-user{
        background: $active-user-background;
        border-bottom: 1px solid $header-c-background;
         .header_c{
            background: $header-c-background;
        }
    }

    /* Active Categories Template vars */
    $active-categories-background:#E0E0E0 ;
    $header-c-background: #673ab7 ;
    $header-c-color: #FFF ;

    .active-categories{
        background: $active-categories-background;
        border-bottom: 1px solid $header-c-background;
    }
    .header_c{
        background: $header-c-background;
    }
</style>
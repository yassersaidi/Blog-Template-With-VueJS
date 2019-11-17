<template>
    <div class="post pt-3 pb-3" id="#activeUsersAria">
      <div class="d-flex align-items-center w-100 pl-2 pr-2">
        <span class="d-inline-block overflow-hidden avatar-container rounded-circle bg-white">
                <img src="@/assets/img/avatar.png" class="rounded-circle w-100 h-100" alt="" srcset="">
        </span>
        <div class="content d-flex justify-content-between align-items-center ml-3 w-100">
          <span class="post-auther a-go">{{ user_name }}</span>
          <span class="post-views a-go">+{{ user_views }}</span>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props:["user_id" , "user_name" , "user_views"],
  name: "active_users"
};
</script>

<style lang="scss" scoped>
   .avatar-container{
        width:40px;
        height:40px;
        padding: 3px;
    }
    .post:not(:last-child){
        border-bottom: 1px solid hsla(0, 4%, 56%, 0.623) ;
    }
    .a-go{
        padding: 3px;
        border-radius: 6%;
        color: #FFF;
        font-size: smaller;
    }
    .post-auther{
        background: #607d8b;
    }
    .post-views{
        background: #2196f3;
    }
</style>

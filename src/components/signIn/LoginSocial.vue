<template>
    <div class="mt-2">
       <div class="separate"></div>
       Or Login with:
       <div class="mt-3 d-flex align-items-center justify-content-around">
           
           <router-link class="with-fb a-so" to="/sign_in/facebook">
           <span>
               <i class="fab fa-facebook-f"></i>
               With Facebook
           </span>
           </router-link>
           <router-link class="with-gm a-so" to="/sign_in/gmail">
           <span>
               <i class="fab fa-google-plus"></i>
               With Gmail
           </span>
           </router-link>
       </div>
    </div>
</template>

<script>
export default {
    name:"login_social"
}
</script>
<style lang="scss" scoped>
    .separate{
        height: 1px;
        background-color: #9E9E9E;
        width: 50%;
        margin: 25px auto;
    }
    .a-so{
        color: #FFF;
        border-radius: 12px;
        padding: 7px;
    }
    .with-fb{
        background: #3B5998;

    }
    .with-gm{
        background: #EA4335;
    }
</style>
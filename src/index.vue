<template>
  <div id="app">
    <Navbar :auth="authUser"/>
    <router-view />
    <vue-ins-progress-bar></vue-ins-progress-bar>
    <b-btn style="background-color:#009688" class="go-to-top" @click="goToTop()"><i class="fa fa-chevron-up"></i></b-btn>
  </div>
</template>
<script>
import Navbar from "@/components/navbar/Navbar.vue";
export default {
  data() {
    return {
      authUser: true
    }
  },
  name: "home",
  components: {
    Navbar
  },
  methods: {
    goToTop(){
      window.scrollTo(top);
    }
  },
  mounted () {
    this.$insProgress.finish()
  },
  created () {
    this.$insProgress.start()
 
    this.$router.beforeEach((to, from, next) => {
      this.$insProgress.start()
      next();
    })
    this.$router.afterEach((to, from) => {
    this.$insProgress.finish()
    /**
     * This code is used to avoid vue errors in to and from var
     */
          if(to){
            return true
          }else{
            if(from){
              return false
            }
          }
    /*End */
  })
  }
}
</script>

<style lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      background: #fff;
      color: #193f4b;
      padding: 7px;
    }
  }
}
  .go-to-top{
    position:fixed;
    bottom: 27px;
    right: 20px;
  }
</style>

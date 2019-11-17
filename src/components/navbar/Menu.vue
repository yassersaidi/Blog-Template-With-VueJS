<template>
      <b-navbar-nav>
          <b-nav-item to="/"><i class="fa fa-home"></i>&nbsp;Home</b-nav-item>
          <b-nav-item to="/coding"><i class="fa fa-code"></i>&nbsp;Coding</b-nav-item>
          <b-nav-item to="/tuto"><i class="fa fa-project-diagram"></i>&nbsp;Tuto</b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-envelope"></i>&nbsp;Contact</b-nav-item>
      </b-navbar-nav>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style scoped lang="scss">
  a{
    transition: all .5s ease-in-out
  }
  .router-link-exact-active{
    background: #009688;
    color: #FFF !important;
    border-radius: 5px;
  }
</style>
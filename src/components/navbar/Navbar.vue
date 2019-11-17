<template>
  <div class="nav w-100">
    <b-navbar toggleable="md" type="dark" variant="dark" class="w-100">
      <b-navbar-brand href="#">I&nbsp; <i style="color:red" class="fa fa-heart"></i> Coding</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse class="text-left" id="nav-collapse" is-nav>
        <Menu />
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form >
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item-dropdown v-if="authUser" right>
            <template v-slot:button-content>
             <span class="rounded d-inline-block"><i class="fa fa-user"></i></span>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown v-else right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
             <span class="rounded d-inline-block"><i class="fa fa-user"></i></span>
            </template>
            <b-dropdown-item to="/sign_in"><i class="fa fa-sign-in"></i>&nbsp; Sign in</b-dropdown-item>
            <b-dd-divider></b-dd-divider>
            <b-dropdown-item to="/sign_up"><i class="fa fa-user-plus"></i>&nbsp; Sign-up</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
import Menu from "@/components/navbar/Menu.vue";

export default {
  props:["authUser"],
  name: "navbar",
  toggleCLass: false,
  components: {
    Menu
  }
};
</script>

<style scoped lang="scss">
  #nav-collapse.show{
    margin: 10px 0px 0;
  }
</style>

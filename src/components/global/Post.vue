<template>
  <div class="coding-post-v mt-4 mb-4">
    <div class="d-flex justify-content-between align-items-center">
      <h3 class="coding-post-title">{{ title }}</h3>
      <b-dropdown id="dropdown-1" size="sm" class="ml-1 m-md-2">
        <template v-slot:button-content></template>
        <b-dropdown-item v-if="!savedPost" @click="savePost()">
          <i class="fa fa-save"></i>
          Save Post
        </b-dropdown-item>
        <b-dropdown-item disabled v-else>
          <i class="fa fa-check"></i>
          Post saved !
        </b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item></b-dropdown-item>
        <b-dropdown-item></b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="v-info d-flex align-items-center">
      <div class="coding-post-date mr-2">
        <span class="v-icon">
          <i class="fa fa-calendar-day"></i>
        </span>
        {{ date | text-date}}
      </div>
      <div class="coding-post-view ml-2">
        <span class="v-icon">
          <i class="fa fa-eye"></i>
        </span>
        {{ views }}
      </div>
    </div>

    <p class="coding-post-text">{{ text }}</p>
    <div class="row v-rec">
      <div class="col-sm-6">
        <router-link :to="'/profile/'+id" tag="a" class="coding-post-auther a-go">
          <span class="v-icon">
            <i class="fa fa-user"></i>
          </span>
          {{ auther }}
        </router-link>
      </div>
      <div class="col-sm-6 text-right">
        <router-link to="/categoris" tag="a" class="coding-post-category a-go">
          <span class="v-icon">
            <i class="fa fa-filter"></i>
          </span>
          {{ category | sub-Text(10) }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savedPost: false
    };
  },
  props: [
    "id",
    "user_id",
    "title",
    "date",
    "views",
    "text",
    "auther",
    "category"
  ],
  name: "coding_post",
  methods: {
    savePost() {
      this.savedPost = !this.savedPost;
    }
  }
};
</script>

<style lang="scss">
/* Coding Post Style Var */
$post-text-color: #1d1d1d;
$post-title-text-color: #424242;
$post-v-info-color: #616161;
$post-v-rec-color: #37474f;
$post-auther-background: #607d8b;
$post-category-background: rgba(97, 97, 97, 0.58);
$post-background-color: #ddd;
$post-box-sh-color: rgba(0, 0, 0, 0.1);

.coding-post-v {
  padding: 15px;
  background: $post-background-color;
  border-radius: 5px;
  box-shadow: 0px 0px 10px $post-box-sh-color;
  color: $post-text-color;
  .coding-post-title {
    color: $post-title-text-color;
  }
  .v-info {
    color: $post-v-info-color;
    font-size: smaller;
  }
  .v-rec {
    color: $post-v-rec-color;
  }
  .coding-post-text {
    margin: 12px 0;
    text-indent: 11px;
    line-height: 1.9;
  }
  .a-go {
    padding: 10px;
    border-radius: 50px;
    margin: 0 8px;
    transition: all 0.5s ease-in-out;
    color: #fff;
  }
  .coding-post-auther {
    background: $post-auther-background;
    &:hover {
      box-shadow: 0px 0px 15px $post-auther-background;
    }
  }
  .coding-post-category {
    background: $post-category-background;
    &:hover {
      box-shadow: 0px 0px 15px $post-category-background;
    }
  }
}
</style>
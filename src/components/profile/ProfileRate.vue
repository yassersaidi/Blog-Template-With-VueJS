<template>
  <div class="rate-user card">
    <div class="card-body">
      <h4 class="card-title">Did you like {{userName}} ?</h4>
      <star-rating
        class="d-flex justify-content-center"
        v-model="userRating"
        @rating-selected="setRating"
        :star-size="40"
        :increment="0.5"
        :show-rating="false"
      ></star-rating>
      <div v-if="loadingShow">
        <b-spinner variant="warning" type="grow" label="Loading..."></b-spinner>
      </div>
      <div
        v-if="!loadingShow"
        class="d-flex w-100 mt-2 flex-column align-items-center justify-content-center"
      >
        <span
          class="rounded-circle rateCi d-flex justify-content-center align-items-center"
        >{{ userRating }}</span>
        <p class="m-0 rate-discripe">
          <strong>{{ userRating }} out of 5</strong>
          . Based on the opinion of {{ usersRate }} user
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["userName" , "rate"],
  data() {
    return {
      loadingShow: false,
      userRate: false,
      userRating:this.$props.rate,
      usersRate: 1548
    };
  },
  methods: {
    showLoading(){
     
    },
    setRating(rating) {
      this.loadingShow = true;
      setTimeout(() => {
         this.rating = rating;
         this.usersRate = this.usersRate + 1;
         this.userRate = true;
         this.loadingShow = false; 
      }, 2000);
      
    },
    
  },
  name: "profile_rate"
};
</script>

<style lang="scss" scoped>
.rateCi {
  width: 50px;
  height: 50px;
  background: #ffd055;
  color: #263238;
}
.rate-discripe {
  font-size: 15px;
}
</style>
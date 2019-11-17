<template>
  <div class="profileInfo d-flex justify-content-center w-100">
    <div class="card position-relative col-lg-6">
      <div class="card-cover"></div>
      <div class="text-center w-100">
        <img
          class="card-img-top img-thumbnail rounded-circle img position-relative"
          src="@/assets/img/profile-avatar.jpg"
          alt="Card image cap"
        />
      </div>

      <div class="card-body">
        <h4 class="card-title">{{ userName }}</h4>
        <table class="table">
          <tr>
            <td class="text-left">
              <i class="fa fa-heart" style="color:#FF5722"></i>&nbsp;Followrs
            </td>
            <td class="text-right">{{ follows }}</td>
          </tr>
          <tr>
            <td class="text-left">
              <i class="fa fa-poll" style="color:#8BC34A"></i>&nbsp;Posts
            </td>
            <td class="text-right">{{ posts }}</td>
          </tr>
          <tr>
            <td class="text-left">
              <i class="fa fa-stars" style="color:#FFEB3B"></i>&nbsp;Rating
            </td>
            <td class="text-right">{{ rating }} / 5</td>
          </tr>
        </table>
        <div class="d-flex justify-content-between w-100 align-items-center">
          <div v-if="!acceptFollowRequest" class="w-60 align-items-center">
            <a
              v-if="!sendFollowRequest"
              href="#"
              id="FollowButton"
              class="btn btn-primary pr-5 pl-5 text-center"
              @click="followUser(1)"
            >
              Follow
              <i class="fa fa-user-plus font-weight-light"></i>
            </a>
            <a v-else href="#" id="FollowButton" class="btn btn-info pr-5 pl-5 text-center">
              Sending Request
              <i class="fa fa-arrow-alt-right font-weight-light"></i>
            </a>
            <b-tooltip
              v-if="!sendFollowRequest"
              target="FollowButton"
              triggers="hover"
            >Follow {{ userName }}</b-tooltip>
            <b-tooltip
              v-else
              target="SendingRequest"
              triggers="hover"
            >Sending Request to {{ userName }}</b-tooltip>
          </div>
          <div v-else>
            <b-dropdown id="followOptions" variant="success" class="ml-1 m-md-2">
              <template v-slot:button-content>
                Following
                <i class="fa fa-user-friends font-weight-light"></i>
              </template>

              <b-dropdown-group id="dropdown-follow" header="Follow">
                <b-dropdown-item-button @click="followUser(-1)">
                  <i class="fa fa-user-minus"></i> Unfollow this user
                </b-dropdown-item-button>
              </b-dropdown-group>

              <b-dropdown-divider></b-dropdown-divider>

              <b-dropdown-group id="dropdown-notification" header="Notifications">
                <b-dropdown-item-button v-if="getNotification" @click="getNotiv(1)"><i class="fa fa-bell"></i> Get Notifications</b-dropdown-item-button>
                <b-dropdown-item-button v-else @click="getNotiv(-1)"><i class="fa fa-bell-slash"></i> Stop Getting Notification</b-dropdown-item-button>
              </b-dropdown-group>

            </b-dropdown>
          </div>
          <div class="w-40 d-flex align-items-center">
            <a href="#" id="SendMessage" class="btn" style="background:#8BC34A ; color:#FFF">
              <i class="fa fa-comment font-weight-light"></i>
            </a>
            <b-tooltip
              custom-class
              placement="bottom"
              target="SendMessage"
              triggers="hover">
              Send Message To {{ userName }}
            </b-tooltip>
            <b-tooltip target="MoreOption" triggers="hover" position="bottom">See More Options</b-tooltip>
            <div>
              <b-dropdown id="dropdown-1" class="ml-1 m-md-2">
                <template v-slot:button-content>More &nbsp;</template>
                <b-dropdown-item v-if="!copyProfileLink" @click="copyUserLink()">
                  <i class="fa fa-copy"></i>
                  Copy user link !
                  <input
                    type="hidden"
                    name
                    id="userPath"
                    v-model="userPath"
                  />
                </b-dropdown-item>
                <b-dropdown-item disabled v-else @click="copyUserLink()">
                  <i class="fa fa-check"></i>
                  Link copied !
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["userName" , "follows" , "posts" , "rating"],
  data() {
    return {
      sendFollowRequest: false,
      acceptFollowRequest: true,
      copyProfileLink: false,
      getNotification:true,
      userPath: window.location.origin + "" + this.$route.path
    };
  },
  name: "profile_info",
  methods: {
    copyUserLink(){
      let user_path = document.getElementById("userPath");
      user_path.setAttribute("type", "text");

      user_path.select();
      document.execCommand("copy");

      user_path.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();

      this.copyProfileLink = true;
    },
    followUser(state){
      if(state == 1){
        this.sendFollowRequest = true;
      }else{
        this.acceptFollowRequest = false;
      }
    },
    getNotiv(state){
      if(state == 1){
        this.getNotification = false
      }else{
        this.getNotification = true ;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-cover {
  background: linear-gradient(45deg, #e91e63, #9c27b0);
  width: 100%;
  height: 130px;
  border-radius: 10px 10px 0 0;
  position: absolute;
  top: -6px;
  left: 0;
}
.img {
  width: 100px;
  height: 100px;
}
.card {
  padding: 72px 0 0;
}
</style>
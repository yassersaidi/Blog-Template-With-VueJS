<template>
  <div class="sign-in pt-5 vh-100">
    <div class="overflow-back position-fixed h-100 w-100"></div>
    <b-container class="container">
      <b-card class="col-xs-12">
        <LoginHeader />
        <LoginForm />
        <LoginSocial />
      </b-card>
    </b-container>
  </div>
</template>
<script>
import LoginHeader from "@/components/signIn/LoginHeader";
import LoginForm from "@/components/signIn/LoginForm";
import LoginSocial from "@/components/signIn/LoginSocial";
export default {
  data() {
    return {
      yasser: [
        {
          id: 71
        }
      ]
    };
  },
  name: "sign_in",
  components: {
    LoginHeader,
    LoginForm,
    LoginSocial
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
$img_path: "@/assets/";
.overflow-back {
  top: 0;
  left: 0;
  background-image: url("../../assets/fullWal.jpg");
  background-size: cover;
  background-attachment: fixed;
  filter: blur(3px);
  z-index: -1
}
.card {
  padding: 0px 21px !important;
  width: 350px;
  margin: 0 auto;
  text-align: left;
  background-color: rgba(245, 245, 245, 0.8392156862745098);
}
</style>

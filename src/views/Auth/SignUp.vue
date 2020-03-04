<template>
<div class="sign-up pt-5 vh-100">
   <div class="overflow-back position-fixed h-100 w-100"></div>
    <b-container class="container">
      <b-card class="col-xs-12">
        <LoginHeader />
        <SignUpForm />
      </b-card>
    </b-container>
</div>
</template>

<script>
import LoginHeader from "@/components/signIn/LoginHeader";
import SignUpForm from "@/components/signIn/SignUpForm";
export default {
  name:"sign_up",
  components:{
    LoginHeader,
    SignUpForm
  }
};
</script>

<style lang="scss" scoped>
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

<template>
  <b-container>
    <div class="overflow-back position-fixed h-100 w-100"></div>
    <b-card class="mt-5 w-75">
      <template v-slot:header>
        <h4>
           Forget Password !
        </h4>
      </template>
      <b-card-text>
        <b-form @submit="onSubmit">
          <b-form-group
            id="Email"
            label="Enter your email"
            label-for="email"
            class="text-left"
          >
            <b-form-input
              id="email"
              v-model="form.email"
              required
              placeholder="Enter your email"
            ></b-form-input>
          </b-form-group>
                   <b-button v-b-popover.hover.bottom="'Click to send you reset password link , to reset your password '" title="Check your email !" class="text-right" type="submit" variant="primary">Send</b-button>

        </b-form>
      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
    data() {
        return {
            form:{
                 email:""
            }
        }
    },
    methods: {
        onSubmit(){
            alert(this.form.email)
        },
    },
    name: "email_reset"
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
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.75)
}
</style>
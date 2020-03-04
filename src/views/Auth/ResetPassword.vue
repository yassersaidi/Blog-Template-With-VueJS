<template>
  <b-container>
    <div class="overflow-back position-fixed h-100 w-100"></div>
    <b-card style="margin:0 auto" class="mt-5 w-75">
      <template v-slot:header>
        <h4>
           <i class="fa fa-key"></i> New Password
        </h4>
      </template>
      <b-card-text>
        <b-form @submit="onSubmit">
          <b-form-group
            id="password-label"
            label="Enter new password"
            label-for="password"
            class="text-left"
          >
            <b-form-input
              id="password"
              type="password"
              v-model="form.password"
              required
              placeholder="Enter new password"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="password-conferm-label"
            label="Confirme your password"
            label-for="password-conferm"
            class="text-left"
          >
            <b-form-input
              id="password-conferm"
              v-model="form.passwordCon"
              required
              placeholder="Confirme your password"
            ></b-form-input>
          </b-form-group>
          <b-button
            class="text-right"
            type="submit"
            variant="success"
            >Save</b-button
          >
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
        password:"",
        passwordCon:""
        
      }
    }
  },
    name:"new_password",
    methods: {
        onSubmit(){
            alert(this.form.email)
        },
    },
}
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
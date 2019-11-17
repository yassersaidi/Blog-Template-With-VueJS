<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
         <!-- First Name Group -->
        <b-form-group id="FirstNameInput" label="Your First Name:" label-for="first-name" class="text-left">
          <b-form-input id="first-name" v-model="form.firstName" required placeholder="Enter first name"></b-form-input>
        </b-form-group>
        <!-- // Last Name Group -->
        <b-form-group id="input-group-2" label="Your Last Name:" label-for="last-name" class="text-left">
          <b-form-input id="last-name" v-model="form.lastName" required placeholder="Enter last name"></b-form-input>
        </b-form-group>
         <!-- // Email Group -->
        <b-form-group id="EmailInput" label="Email address:" label-for="email" class="text-left" description="We'll never share your email with anyone else.">
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>
        <!-- // Password Group -->
        <b-form-group id="PasswordInput" label="Password:" label-for="passwod" class="text-left" description="We'll never share your email with anyone else.">
          <b-form-input
            id="passwod"
            v-model="form.password"
            type="password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
</b-form>

  </div>
</template>


<script>
export default {
  name:"sign_up",
  data() {
    return {
      form: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        username: "",
        gender: null,
        checked: []
      },
      foods: [{ text: "Select Gender", value: null }, "Male", "Female"],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
};
</script>

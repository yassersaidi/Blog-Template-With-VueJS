<template>
    <div>
        <div class="">
            <b-form @submit="onSubmit">
                <!-- // First-name Group -->
                <b-form-group id="firstName" label="First Name : " label-for="first-name">
                    <b-form-input
                        id="first-name"
                        v-model="form.firstName"
                        type="text"
                        required
                        placeholder="Enter first name">
                    </b-form-input>
                </b-form-group>
                <!-- // Last-name Group -->
                <b-form-group id="lastName" label="Last Name:" label-for="last-name">
                    <b-form-input
                        id="last-name"
                        v-model="form.lastName"
                        type="text"
                        required
                        placeholder="Enter Last Name "
                    ></b-form-input>
                </b-form-group>
                <!-- // Email Group -->
                <b-form-group id="Email" label="Your Email:" label-for="email">
                    <b-form-input
                        id="email"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Enter your email"
                    ></b-form-input>
                </b-form-group>
                <!-- // Password Group -->
                <b-form-group id="Password" label="Password:" label-for="password">
                <div class="position-relative">
                    <b-form-input
                        id="password"
                        v-model="form.password"
                        class="w-80"
                        type="password"
                        required
                        placeholder="Enter password"
                    ></b-form-input>
                    <b-btn class="sh-btn" variant="primary" @click="toogleViewPassword()">
                        <i v-if="!passwordShow" class="fa fa-eye"></i>
                        <i v-else class="fa fa-eye-slash"></i>
                    </b-btn>
                </div>
                </b-form-group>
                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0 text-left mt-2"
                >I'm Agree to <router-link to="term">Term</router-link> and <router-link to="conditions">conditions</router-link></b-form-checkbox>
                <div class="text-center mt-4">
                    <b-button  type="submit" variant="success">Create</b-button>
                </div>
              
            </b-form>
        </div>
        <div class="sign-up mt-4">
            already have an account ? 
            <router-link to="sign_in">Sign in</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form:{
                firstName:"",
                lastName:"",
                email:"",
                password:""
            },
            passwordShow: false,
        }
    },
    methods: {
        onSubmit(){
            return this.form.email
        },
        toogleViewPassword() {
        let passwordF = document.getElementById("password");
        if (this.passwordShow) {
            passwordF.setAttribute("type", "password");
            this.passwordShow = false;
        } else {
            passwordF.setAttribute("type", "text");
            this.passwordShow = true;
        }
        },
    },
    name:"sign_up_form"
}
</script>

<style lang="scss" scoped>
    .sh-btn{
        position: absolute;
        right: 3px;
        top: 0px;
        width: 54px;
        /* padding: 1px !important; */
        outline: none;
        height: 38px;
        background: #ced4da;
        color: #37474F;
        line-height: 0.9;
        border-radius: 0 5px 5px 0;
        border: 1px solid rgba(17, 34, 51, 0.22);
    }
    .w-80{
        width:80% !important;
    }
</style>
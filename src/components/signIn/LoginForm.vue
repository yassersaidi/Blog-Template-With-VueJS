<template>
    <div class="">
        <div class="">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <!-- // Email Group -->
            <b-form-group id="EmailInput" label="Email address:" label-for="email">
            <b-form-input
                id="email"
                v-model="email"
                type="email"
                required
                placeholder="Enter email"
            ></b-form-input>
            <b-form-invalid-feedback  :state="validationEmail">
                Enter email like that : yasser@mail.com
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationEmail">
                Looks Good.
            </b-form-valid-feedback>
            </b-form-group>
            <!-- // Password Group -->
            <b-form-group id="PasswordInput" label="Password:" label-for="passwod">
            <div class="position-relative">
                <b-form-input
                    id="password"
                    v-model="password"
                    class="w-80"
                    type="password"
                    required
                    placeholder="Enter password"
                ></b-form-input>
                <b-btn class="sh-btn"  variant="info" @click="toogleViewPassword()">
                    <i v-if="!passwordShow" class="fa fa-eye"></i>
                    <i v-else class="fa fa-eye-slash"></i>
                </b-btn>
            </div>
            </b-form-group>
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0 text-left mt-2"
            >Remember me</b-form-checkbox
            >
            <div class="d-flex align-items-center justify-content-between mt-3">
            <router-link to="/reset_pass">Forget your password ?</router-link>
            <b-button type="submit" variant="success">Log-in</b-button>
            </div>
        </b-form>
        </div>
        <div class="sign-up mt-4">
        you don't have an account ?
        <router-link to="sign_up">Sign up</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            passwordShow: false,
            show: true

        };
    },
    methods: {
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
        onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
        },
        onReset(evt) {
        evt.preventDefault();
        // Reset our form values
        this.form.email = "";
        this.form.password = "";
        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
            this.show = true;
        });
        }
    },
    computed: {
        validationEmail() {
        let email = this.email;
        let emailReg = /^[\w\-_.+]+@[\w-]+(\.\w{2,4})+$/;
        if (email.match(emailReg)) {
            return true;
        } else {
            return false;
        }
        }
    },
    name: "login_form"
};
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

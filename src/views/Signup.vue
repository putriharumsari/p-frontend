<template>
<!-- Signup Form -->
  <body>
  <section class="container forms">
  <div class="form signup" v-if="!isFormLogin">
    <div class="form-content">
      <header>Signup</header>
      <form action="#">
        <div class="field input-field">
          <input type="email" placeholder="Email" class="input">
        </div>
        <div class="field input-field">
          <input :type="passwordType" v-model="createPassword" placeholder="Create password" class="password" id="login-password">
          <i class='bx eye-icon' :class="{'bx-hide': !isActive, 'bx-show': isActive}" v-on:click="onEyeIconClick"></i>
        </div>

        <div class="field input-field">
          <input :type="passwordType" v-model="confirmPassword" placeholder="Confirm password" class="password">
          <i class='bx eye-icon' :class="{'bx-hide': !isActive, 'bx-show': isActive}" v-on:click="onEyeIconClick"></i>
        </div>

        <div class="field button-field">
          <button>Signup</button>
        </div>
      </form>
      <div class="form-link">
        <span>Already have an account? <a href="/login" class="link login-link" v-on:click="toggleForm"></a></span>
        <router-link class="button" to="/login">Sign in</router-link>
      </div>
    </div>
  </div>
  </section>
  </body>
</template>

<script>
export default {
  name: 'Signup',
  methods: {
    onEyeIconClick: function (event) {
      this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      this.isActive = !this.isActive
    },
    toggleForm: function () {
      this.isFormLogin = !this.isFormLogin
      this.password = ''
      this.createPassword = ''
      this.confirmPassword = ''
      this.isActive = false
      this.passwordType = 'password'
    }
  },
  data () {
    return {
      password: '',
      createPassword: '',
      confirmPassword: '',
      passwordType: 'password',
      isFormLogin: true
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.container {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
}
.form{
  position: absolute;
  max-width: 430px;
  width: 100%;
  padding: 30px;
  border-radius: 6px;
  background: #FFF;
}
/*.form.signup{
  opacity: 0;
  pointer-events: none;
}
.forms.show-signup .form.signup{
  opacity: 1;
  pointer-events: auto;
}
.forms.show-signup .form.login{
  opacity: 0;
  pointer-events: none;
}*/
header{
  font-size: 28px;
  font-weight: 600;
  color: #232836;
  text-align: center;
}
form{
  margin-top: 30px;
}
.form .field{
  position: relative;
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 6px;
}
.field input,
.field button{
  height: 100%;
  width: 100%;
  border: none;
  font-size: 16px;
  font-weight: 400;
  border-radius: 0;
}
.field input{
  outline: none;
  padding: 0 15px;
  border: 1px solid#CACACA;
}
.field input:focus{
  border-bottom-width: 2px;
}
.eye-icon{
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 18px;
  color: #8b8b8b;
  cursor: pointer;
  padding: 5px;
}
.field button{
  color: #fff;
  background-color: #0171d3;
  transition: all 0.3s ease;
  cursor: pointer;
}
.field button:hover{
  background-color: #016dcb;
}
.form-link{
  text-align: center;
  margin-top: 10px;
}
.form-link span,
.form-link a{
  font-size: 14px;
  font-weight: 400;
  color: #232836;
}
.form a{
  color: #0171d3;
  text-decoration: none;
}
.form-content a:hover{
  text-decoration: underline;
}
</style>

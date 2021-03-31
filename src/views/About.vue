<template>
  <div>
    <form @submit.prevent="register">
      <h2>Register</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      var firebaseAuth = firebase.auth();
      try {
        await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        alert("registrado com sucesso");
        this.$router.push("/");
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

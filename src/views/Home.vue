<template>
  <div>
    <form @submit.prevent="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      var firebaseAuth = firebase.auth();
      try {
        await firebaseAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        alert("logou");
        this.$router.push("/dashboard");
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>

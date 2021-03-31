import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyB_eB5O-gukKd0juF0fifW4DPOdDIcyWm4",
  authDomain: "auth-test-8a59d.firebaseapp.com",
  projectId: "auth-test-8a59d",
  storageBucket: "auth-test-8a59d.appspot.com",
  messagingSenderId: "761396928101",
  appId: "1:761396928101:web:8205fc1b6e8439c3af708c",
};

firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

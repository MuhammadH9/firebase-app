window.addEventListener("load", () => {
  if (localStorage.getItem("user")) {
    window.location.replace("../index.html");
  }
});

import { auth, signInWithEmailAndPassword } from "./firebase.js";

const loginHandler = async () => {
  try {
    // console.log("signUpHandler");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    // console.log("email", email.value, password.value);
    const response = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    localStorage.setItem("user", response.user.uid);
    window.location.replace("../index.html");
    // console.log(response, "response");
  } catch (error) {
    console.log("error", error.message);
  }
};

window.loginHandler = loginHandler;

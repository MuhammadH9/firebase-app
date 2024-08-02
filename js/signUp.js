window.addEventListener("load", () => {
  if (localStorage.getItem("user")) {
    window.location.replace("../index.html");
  }
});

import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
  signInWithEmailAndPassword,
} from "./firebase.js";

const signUpHandler = async () => {
  try {
    const fullName = document.querySelector("#fullName");
    const gender = document.querySelector("#gender");
    const address = document.querySelector("#address");
    const email = document.querySelector("#email");
    const number = document.querySelector("#number");
    const dob = document.querySelector("#dob");
    const password = document.querySelector("#password");
    const emer_number = document.querySelector("#emer_number");
    const userObj = {
      fullName: fullName.value,
      gender: gender.value,
      address: address.value,
      email: email.value,
      number: number.value,
      dob: dob.value,
      password: password.value,
      emer_number: emer_number.value,
    };
    console.log("userObj", userObj);

    const response = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const uid = response.user.uid;

    const userResponse = await setDoc(doc(db, "users", uid), userObj);
    alert("user successfully signup");
    window.location.href = "../pages/login.html";

  } catch (error) {
    console.log("error", error.message);
    alert(error.message);
  }
};

window.signUpHandler = signUpHandler;
const loginHandler = async () => {
  try {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const response = await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    console.log(response, "response");
  } catch (error) {
    console.log("error", error.message);
  }
};

window.loginHandler = loginHandler;

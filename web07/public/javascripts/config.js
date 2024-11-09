  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDS9vYHBjrG3MCm7KD801YDulL1fDDY8l0",
    authDomain: "inha-6f1e9.firebaseapp.com",
    projectId: "inha-6f1e9",
    storageBucket: "inha-6f1e9.appspot.com",
    messagingSenderId: "507384998570",
    appId: "1:507384998570:web:05587967c1ed838c223ed3",
    measurementId: "G-RESQNPBHXP"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
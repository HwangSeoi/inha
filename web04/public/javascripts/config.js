  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDMHPC5GsCg4XZ2NrG-z_D-86Q1DZSRVxM",
    authDomain: "inha-d91fc.firebaseapp.com",
    projectId: "inha-d91fc",
    storageBucket: "inha-d91fc.appspot.com",
    messagingSenderId: "402204153725",
    appId: "1:402204153725:web:d58e44bef14d4dc5ff1e14",
    measurementId: "G-8G0V6G9GSG"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
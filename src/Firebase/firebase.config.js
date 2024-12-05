

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKp6vPX0DZE4Ng-lxsFOjSrrJta-AXFPM",
  authDomain: "fitness-tracker-e3d35.firebaseapp.com",
  projectId: "fitness-tracker-e3d35",
  storageBucket: "fitness-tracker-e3d35.firebasestorage.app",
  messagingSenderId: "1073781655319",
  appId: "1:1073781655319:web:168d6bee16f110bae15952"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);





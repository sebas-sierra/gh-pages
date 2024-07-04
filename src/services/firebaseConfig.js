
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5OtsDrikfSL2xlsKSgI9IleN06G7fdGM",
  authDomain: "proyecto-tienda-6ad9d.firebaseapp.com",
  projectId: "proyecto-tienda-6ad9d",
  storageBucket: "proyecto-tienda-6ad9d.appspot.com",
  messagingSenderId: "525411354915",
  appId: "1:525411354915:web:a8e00e086d0cc5cd852496"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db, 'productos');
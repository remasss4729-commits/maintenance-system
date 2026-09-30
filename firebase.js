import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAUtWSTZpTZ5Z7G5vlJQGc8Q-13F_Nsd6A",
    authDomain: "maintenance-system01.firebaseapp.com",
    projectId: "maintenance-system01",
    storageBucket: "maintenance-system01.firebasestorage.app",
    messagingSenderId: "828245775678",
    appId: "1:828245775678:web:9f6bfe4c14d652583f886f",
    measurementId: "G-YN2EBMVE96"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export {
    db,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    deleteDoc,
    doc,
    onSnapshot,
    serverTimestamp
};
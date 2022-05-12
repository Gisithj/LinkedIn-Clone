import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCsP_3pQ9H9_MveR7WIyNLnz-0bbLUtPho",
    authDomain: "linkedin-clone-7d687.firebaseapp.com",
    projectId: "linkedin-clone-7d687",
    storageBucket: "linkedin-clone-7d687.appspot.com",
    messagingSenderId: "716763956753",
    appId: "1:716763956753:web:b299a9ef028a1e992713b0"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  const auth = getAuth();

  export {db,auth}
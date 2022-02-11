import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const InittializationApp = () => {
    return initializeApp(firebaseConfig);
}

export default InittializationApp;
import firebase from "firebase"
import { firebaseConfig } from "../firebase.config"

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }
const db = firebase.database()
const firestore = firebase.firestore()

export {db,firestore}
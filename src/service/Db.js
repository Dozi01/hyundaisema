import { app } from "../firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";

const newID = () => {
  return Math.random().toString(36).substr(2, 16);
};

export function writeUserData(name, email, phoneNum) {
  const db = getDatabase();
  set(ref(db, "users/" + newID()), {
    username: name,
    email: email,
    phoneNum: phoneNum,
  });
}

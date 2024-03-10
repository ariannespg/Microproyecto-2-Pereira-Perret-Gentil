import { useState } from "react";
import appFirebase from "./credenciales";
import {getAuth, onAUthStateChanged, createUserWithEmailAndPassword} from "firebase/auth";
const auth = getAuth(appFirebase);

import Login from "./routes/Login";

import './App.css';

 function App() {

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUser(usuarioFirebase);
    } else {
      setUser(null);
    }
  })

  return (
    <div>
      {user ?  <Home correoUsuario = {user.email} />: <Login/>}
    </div>
  )
 }

 export default App
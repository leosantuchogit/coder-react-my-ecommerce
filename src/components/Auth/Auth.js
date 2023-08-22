import { RecaptchaVerifier, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useState } from "react";
import { auth, googleProvider } from "../../services/firebase/firebase";

const Auth = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const signIn = async() => {
        await createUserWithEmailAndPassword(auth, email, pass);
    } 

    const signInWithGoogle = async() => {
        await signInWithPopup(auth, googleProvider);
    }

    return (
        <div>
            <span>Usuario registrado: {auth?.currentUser?.email}</span>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input placeholder="Password" onChange={(e)=>setPass(e.target.value)}/>
            <button onClick={ signIn }>Login</button>
            <button onClick={ signInWithGoogle }>Login Google</button>

        </div>
    )
}

export default Auth
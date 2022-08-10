
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import styles from "./Login.module.css";
import { setUser } from "../../Redux/store/slice/userSlice";
import { useAppDispatch } from "./hooks/redux-hooks";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const dispatch = useAppDispatch();
const {push} = useHistory();

  const handleClick = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token: user.refreshToken,
                auth: user.email
            }));
            push('/Contacts');
        })
        .catch(() => alert('Invalid user!'))
}
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
  return (
    <div className={styles.login__page}>
      <p className={styles.login__label}>Sign in  to see your Contacts</p>
      <input
                type="email"
                value={email}
                style={{marginLeft: '30px',height: '20px',fontSize: '15px'}}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                style={{marginLeft: '30px',height: '20px',fontSize: '15px'}}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <br />
            <br />
            <button  className={styles.login__btn}
                onClick={() => handleClick(email, pass)}
            >
                   Sign in 
            </button>
   <h2>Or {
   <Link to={`/register`}>
   register 
          </Link>
 
   }
      if you don't have an account</h2>
    </div>
  );
}

export default Login;

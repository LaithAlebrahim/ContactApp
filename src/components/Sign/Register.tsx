import {Link, useHistory} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import {setUser} from "../../Redux/store/slice/userSlice";
import { useAppDispatch } from './hooks/redux-hooks';
import { useState } from 'react';
import styles from './Login.module.css';
const SignUp = () => {
    const dispatch = useAppDispatch();
    const {push} = useHistory();

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                    
                }));
                push('/Contacts');
            })
            .catch(console.error)
    }

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
      return (
        <div className={styles.login__page}>
          <p className={styles.login__label}>Sign up  to start </p>
          <input 
            style={{marginLeft: '30px',height: '20px',fontSize: '15px'}}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                style={{marginLeft: '30px',height: '20px'}}
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="password"
                />  <br />
                <br />
                <button  className={styles.login__btn}
                   onClick={() => handleRegister(email, pass)}
                >
                       Sign up 
                </button>
       <h2>Or {
       <Link to={`/login`}>
       login 
              </Link>
     
       }
       if you already have account </h2>
        </div>
      );
}

export  default SignUp

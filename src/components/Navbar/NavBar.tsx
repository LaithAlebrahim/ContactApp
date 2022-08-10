

import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";
import { useAuth } from '../Sign/hooks/use-auth';
import {removeUser} from '../../Redux/store/slice/userSlice'
import { useAppDispatch } from '../Sign/hooks/redux-hooks';



export const Navbar = () => {
 
  const dispatch = useAppDispatch();

  const {isAuth} = useAuth();
  return (
    <div className={styles.nav__bar}>
      <div>
        <h1 className={styles.nav__title}>Contact App </h1>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} to="/Contacts">
          Home
        </Link>

        {!isAuth ? (
          <Link className={styles.link} to="/login">
            Login
          </Link>
        ) : (
          <>
            <Link className={styles.link} to="/create">
              Create
            </Link>
            <button className={styles.button__link}     onClick={()=> dispatch(removeUser())}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

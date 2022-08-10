/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";

import { useForm } from "react-hook-form";

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import styles from "./Create.module.css";
import { useHistory } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const {push} = useHistory();
  const [isSubmmiting, setIsSubmmiting] = useState(false);

  const postCollectionRef = collection(db, "posts");

  const { register, handleSubmit,formState: { errors } } = useForm();

  const onSubmit = async () => {
    setIsSubmmiting(true);
  
      setIsSubmmiting(true);
      await addDoc(postCollectionRef, {
        name,
        email,
        number,
        id: auth.currentUser.uid.toUpperCase(),
        auth:auth.currentUser.email,
      });

      push('/Contacts');
    
  };

  return (
    <div className={styles.create}>
      <h2 className={styles.create__title}>Add New Blog</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.blog__title}>
          <input
            className={styles.blog__title__text}
            type="text"
            required
            value={name}
            {...register("Name", { required: true })}
            
            onChange={(e) => setName(e.target.value)}
            placeholder="Write The Name"
          />
               {errors.Name && <span>This field is required</span>}

               <input
            className={styles.blog__title__text}
            type="text"
            required
            value={email}
            {...register("Email", { required: true })}
            
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Write The Email"
          />
          <input
            className={styles.blog__title__text}
            type="text"
            required
            value={number}
            {...register("Number", { required: true })}
            
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Write The Number"
          />
        </div>
        
        <div className={styles.blog__bottom}>
        {isSubmmiting ? (
          <button className={styles.blog__button} disabled>
            Submitting...
          </button>
        ) : (
          <button
            className={styles.blog__button}
            type="submit"
          >
            Submit
          </button>
        )}
      </div>
      </form>
      
    </div>
  );
}

export default Create;




import React, {  useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import {  db } from "../firebase-config";
import styles from "./Create.module.css";
import { useHistory, useLocation } from "react-router-dom";



function BlogDetails() {
//get the values from states
  const location = useLocation<Location>();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");
  useEffect(() => {
    if(location.state){
      let state= location.state as any;
      setName(state.name) ;
      setEmail(state.email);
      setNumber(state.number);
    }
  } , []);

  const {push} = useHistory();
  const [isSubmmiting, setIsSubmmiting] = useState(false);

  const id = window.location.pathname.split("/")[2];

  const { register, handleSubmit,formState: { errors } } = useForm();
  const update = doc(collection(db, "posts"), id);

  const onSubmit = async () => {

    setIsSubmmiting(true);

      updateDoc(update, { name, email, number });
      push('/Contacts');
      
  };

  return (
    <div className={styles.create}>
    <h2 className={styles.create__title}>Update Contact</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.blog__title}>
        <input
          className={styles.blog__title__text}
          type="text"
         
          //take value from location 
          value={name}
        
          {...register("Name")}
          
          onChange={(e) => setName(e.target.value)}
         
          placeholder="Write The new Name"
        />
             {errors.Name && <span>This field is required</span>}

             <input
          className={styles.blog__title__text}
          type="text"
          required
          value={email}
      
          {...register("Email")}
          onChange={(e) => setEmail(e.target.value)}
      
          placeholder="Write The new Email"
        />
        <input
          className={styles.blog__title__text}
          type="text"
          required
          value={number}
         
          {...register("Number", { required: true })}
          
        onChange={(e) => setNumber(e.target.value)}
          placeholder="Write The new Number"
        />
      </div>
      
      <div className={styles.blog__bottom}>
      {isSubmmiting ? (
        <button className={styles.blog__button} disabled>
          Updating...
        </button>
      ) : (
        <button
          className={styles.blog__button}
          type="submit"
        >
          Update
        </button>
      )}
    </div>
    </form>
    
  </div>
    
  );
}

export default BlogDetails;

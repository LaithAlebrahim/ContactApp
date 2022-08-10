

import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase-config";
import styles from "./Home.module.css";

const Home = ({ isAuth }: { isAuth: boolean | string }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  const [name,setName]=useState("");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
if(!isAuth){
  return (
    <div className={styles.home}>
      <h2 className={styles.home__title}>You need to  <Link to={`/login`}>
   Sign in
          </Link>to see your contacts</h2>
      <br />
      <br />
      </div>
)
 }
 return (
 
  <div className={styles.home}>
    <h2 className={styles.home__title}>Your contacts</h2>
    <h3 style={ 
{ color: "white" ,
  marginLeft: "60px",
  fontSize:"30px"
}
      
    }>Search By Contact name</h3>
    <input 
    style={ 
      {
        marginLeft: "60px",
        height: "20px",
        width: "200px",
        fontSize:"20px"
      }
            
          }
    type="text" onChange={(e)=>setName(e.target.value)}/>
    <br />
    <br />
    

  { 
   postLists.filter((post) => post.auth === auth.currentUser.email ).filter((post)=> 
      post.name.toLowerCase().includes(name.toLowerCase()
      ))
    .map((post) => (
      <div className={styles.blog__preview}>
        <div className={styles.left__part}>
          
            <h2 className={styles.post__title}>Contact Name : {post.name}</h2>
            <h2 className={styles.post__author}> Email :{post.email} </h2>
            <h2 className={styles.post__author}> Number :{post.number} </h2>
            <br />
         
        </div>
        <div className={styles.right__part}>
        <button   className={styles.post__button}>
       
        <Link to={{pathname:`/contacts/${post.id}`,
            state:{
              name:post.name,
              email:post.email,
              number:post.number,
            }
      
      }} style={{    color: "white"}}
        
        
        >
        Update 
          </Link>
        </button>

            <button
              className={styles.post__button}
              onClick={() => {
                deletePost(post.id);
              }}
            >
              Delete
            </button>
          
        </div>
      </div>
    ))
    }
  </div>
            
            
);
   

    
};

export default Home;

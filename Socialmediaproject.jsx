// //PART - 1   APP.JSX

// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./App.module.css";
// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Postlist from "./Postlist";
// import Createpost from "./Createpost";
// import Postlistprovider from "./store/Postliststore";

// export default function App() {
//   const [state, setstate] = useState("Home");

//   return (
//     <Postlistprovider>
//       <div>
//         <Header state={state} setstate={setstate}></Header>
//         <hr />
//         {state === "Home" ? <Postlist></Postlist> : <Createpost></Createpost>}

//         <Footer></Footer>
//       </div>
//     </Postlistprovider>
//   );
// }


// // ====================================================================================================
// // PART-2 HEADER


// import styles from "./App.module.css";
// import React from 'react'
// export default function Header({state , setstate }) {
//   return (
//     <div>
   
// <header  class="p-3 bg-dark text-white ">
//     <div class="container">
     
//       <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//         <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
//           <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
//         </a>

//         <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" >
//           <li><a href="#" class="nav-link px-2 text-secondary " onClick={()=>{setstate('Home')}} style={{color: "white"}} >Home</a></li>
//           <li><a href="#" class="nav-link px-2 text-white" onClick={()=>{setstate('creat')}}>creat</a></li>
//           <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
//           <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
//           <li><a href="#" class="nav-link px-2 text-white">About</a></li>
//         </ul>

//         <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
//           <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
//         </form>

//         <div class="text-end">
//           <button type="button" class="btn btn-outline-light me-2">Login</button>
//           <button type="button" class="btn btn-warning">Sign-up</button>
//         </div>
//       </div>
//     </div>
//   </header>
      
//     </div>
//   )
// }


// // ====================================================================================================
// // PART-3 FOOTER

// import styles from "./App.module.css";
// import React from 'react'

// export default function Footer() {
//   return (
//     <div>
//       <div  className={ styles.container}>
//   <footer class="py-3 my-4">
//     <ul class="nav justify-content-center border-bottom pb-3 mb-3">
//       <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
//       <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
//       <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
//       <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
//       <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
//     </ul>
//     <p class="text-center text-muted">© 2022 Company, Inc</p>
//   </footer>
  
// </div>
      
//     </div>
//   )
// }

// // ====================================================================================================
// // PART-4  CARD


// import styles from "./App.module.css";

// import React, { useContext } from 'react'
// import { Postlist as deledata } from "./store/Postliststore";

// export default function Card({cart}) {

//   const { deletpost } = useContext(deledata);




//   return (
//     <div classname={styles.PostCard}>
//       <div >
 
//   <div class="card-body">
//     <button>
//            <div onClick={() => deletpost(cart.id)}>Delet</div>
//           </button>
        
//     <h5 class="card-title">{cart.title}</h5>
//     <p class="card-text">{cart.body}</p>
//     <p>{cart.reaction}{""}</p>
//     {/* {cart.tags.map((tag) => (
//             <span key={tag} class="badge rounded-pill text-bg-primary">
//               {tag}
//             </span>
//           ))}
//    */}
    
//   </div>
// </div>
//     </div>
//   )
// }


// // ====================================================================================================
// // PART-5 POSTLIST


// import { useContext, useState } from 'react'
// import Card from './Card'
// import { Postlist as postdata } from './store/Postliststore'
// import Welcome from './componend/Welcome'
// import Loadingspiner from './Loadingspiner';



// export default function Postlist() {

//   const {postlist , addintialpost} = useContext(postdata);
//   const [fetching , setfetching] = useState(false);



//   return (
//     <div>
      
     
//       {fetching && <Loadingspiner/>}
//       {!fetching && postlist.length === 0 && <center><Welcome/></center>}
//       {!fetching && postlist.map((cart)=>(<Card key={cart.id} cart={cart}/>))}
       
       
//     </div>
//   )
// }




// // ====================================================================================================
// // PART-6 CREATE

// import React, { useId } from "react";
// import { useContext } from "react";
// import { useRef } from "react";
// import { Postlist as newadd } from "./store/Postliststore";
// export default function Createpost()
// {

//   const { addpost } = useContext(newadd);

//   const useridelement= useRef();
//   const posttitleelement= useRef();
//   const postBodyelement= useRef();
//   const Tagselement= useRef();
//   const reactionelement= useRef();

//   const handlesubmit = (event) => {
//     event.preventDefault();

//    const userid = useridelement.current.value;
//    const posttitle =posttitleelement.current.value;
//    const postBody = postBodyelement.current.value;
//    const Tags = Tagselement.current.value;
//    const reaction =reactionelement.current.value.split(/(\$+)/);

// addpost(userid , posttitle , postBody , reaction , Tags )

// }

//   return (
//     <div>
//       <div class="mb-3">
//         <label for="userid" class="form-label">
//           User id
//         </label>
//         <input
//           type="text"
//           class="form-control"
//           id="userid"
//           ref={useridelement}
//           placeholder="write here"
//         />
//       </div>

//       <hr />

//       <div class="mb-3">
//         <label for="title" class="form-label">
//           Post Title
//         </label>
//         <input
//           type="text"
//           class="form-control"
//           id="title"
//           ref={posttitleelement}
//           placeholder="enter  how are you"
//         />
//       </div>

//       <hr />

//       <div class="mb-3">
//         <label for="body" class="form-label">
//           Body
//         </label>
//         <input
//           type="text"
//           class="form-control"
//           id="body"
//           ref={postBodyelement}
//           placeholder="enter  how are you"
//         />
//       </div>

//       <hr />

//       <div class="mb-3">
//         <label for="reaction" class="form-label">
//           reaction
//         </label>
//         <input
//           type="text"
//           class="form-control"
//           id="reaction"
//           ref={reactionelement}
//           placeholder="enter  how are you"
//         />
//       </div>
//       <hr />

//       <div class="mb-3">
//         <label for="tag" class="form-label">
//           Tag
//         </label>
//         <input
//           type="text"
//           class="form-control"
//           id="tag"
//           ref={Tagselement}
//           placeholder="enter  how are you"
//         />
//       </div>

//       <button onClick={handlesubmit}>click <menu type="toolbar"></menu></button>

//       {/* <button onClick={handlesubmit()}>submit</button> */}

//       <hr />
//       {/* <div class="mb-3">
//         <label for="reaction" class="form-label">
//           Example textarea
//         </label>
//         <textarea
//           class="form-control"
//           id="exampleFormControlTextarea1"
//           rows="3"
//         ></textarea>
//       </div> */}
//     </div>
//   );
// }

// // ====================================================================================================
// // PART-7 POTSTLIST STORE


// import {  createContext , useReducer } from "react";
// export const Postlist = createContext({
// postlist : [],
// addintialpost : ()=>{},
// addpost  : ()=>{},
// deletpost : ()=>{}
// });

// const Postlistreducer = (currprostlist , action ) =>
// {

// let newpost = currprostlist;
// if(action.type === "deletpost")
// {
//   newpost = currprostlist.filter(cart => cart.id !== action.payload.cartid)
// }
// else if(action.type === "addintialpost")
// {
//   newpost = action.payload.posts;
// }
// else if (action.type === "addpost")

//   {
//     newpost = [action.payload , ...currprostlist]
//   }


// return newpost;

// }

// const Postlistprovider =({ children })=>{

//   const [postlist , dispache ] = useReducer(Postlistreducer , defaultpost )
//   const addpost = (userid , posttitle , postBody , reaction , Tags) =>{
//       console.log(`addpost : ${userid} ${posttitle} ${postBody} ${reaction} ${Tags}  `)
    
//     dispache({
//     type : 'addpost',
//     payload : {
//       id: Date.now(),
//       title:posttitle,
//       body:postBody,
//       reaction:reaction,
//       userid:userid,
//       tags:Tags
//     }
//     })
//     };


// const addintialpost =(posts)=>
//     {
// dispache({
//   type : 'addintialpost',
//   payload : {
//     posts,

//   }
// })


//     }
// const deletpost = (cartid)=>{

//   console.log(`delet${cartid}`)

// dispache({

//   type : 'deletpost',
//   payload : {
//   cartid,
//   }
// })
// }

// return <Postlist.Provider value={{postlist , addpost , deletpost , addintialpost}}>{children}</Postlist.Provider>

// }

// export default Postlistprovider;

// const defaultpost = [
//   {
//   id: '1',
//   title:'going to mumbai',
//   body:'frend ia m going to mumbai',
//   reaction:20,
//   userid:'user-9',
//   tags:["welcom " , "mumbai" , "enjoy"]
//   }

//   ,


//   {
//     id: '2',
//     title:'going to mumbai',
//     body:'frend ia m going to mumbai',
//     reaction:60,
//     userid:'user-9',
//     tags:["welcom " , "mumbai" , "enjoy"]
//     }


//     ,


//     {
//       id: '3',
//       title:'going to mumbai',
//       body:'frend ia m going to mumbai',
//       reaction:40,
//       userid:'user-9',
//       tags:["welcom " , "mumbai" , "enjoy"]
//     }

// ];


// // ====================================================================================================
// // PART-8 WELCOME

// import React from 'react'

// export default function Welcome() {
//   return (
//     <div>
//       <h1 style={{margin : '50px'}}>There Are No Post</h1>
//       <button style={{backgroundColor : 'blue'}}>Fecth Data</button>
    
      
    
    
//     </div>
//   ) 
// }



// // ====================================================================================================
// // PART-9  LOADING 

// import React from 'react'

// export default function Loadingspiner() {
//   return (
//     <div>
//       <center>
//         <h1>Loading.....</h1>
        


//         <div class="spinner-border" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>


// </center>
//     </div>
//   )
// }


// // ====================================================================================================
// // PART-10 CSS

// body {
//   margin: 0px;
//   padding: 0px;
// }
// .nav {
//   background-color: rgb(3, 2, 0);
//   color: aqua;
// }

// .content {
//   display: flex;
// }

// .postCard {
//   width: 500px;
//   height: 150px;
//   margin-top: 50px;
//   margin-left: 25px;
//   background-color: aqua;
// }


// .postCard:hover {
//   background-color: aqua;
// }
// .link {
//   color: red;
// }

// .Header {
//   width: 100%;
// }
// .container {
//   width: 100%;
//   margin-top: 500%;
// }
// .Sidebar {
//   height: 100%;
// }
// .p0 {
//   background-color: black;
//   color: beige;
//   width: 250px;
// }
// .p1 {
//   margin-top: 25px;
// }
// .p2:hover {
//   color: aqua;
// }



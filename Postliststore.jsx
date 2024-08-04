
import {  createContext , useReducer } from "react";
export const Postlist = createContext({
postlist : [],
addintialpost : ()=>{},
addpost  : ()=>{},
deletpost : ()=>{}
});

const Postlistreducer = (currprostlist , action ) =>
{

let newpost = currprostlist;
if(action.type === "deletpost")
{
  newpost = currprostlist.filter(cart => cart.id !== action.payload.cartid)
}
else if(action.type === "addintialpost")
{
  newpost = action.payload.posts;
}
else if (action.type === "addpost")

  {
    newpost = [action.payload , ...currprostlist]
  }


return newpost;

}

const Postlistprovider =({ children })=>{

  const [postlist , dispache ] = useReducer(Postlistreducer , defaultpost )
  const addpost = (userid , posttitle , postBody , reaction , Tags) =>{
      console.log(`addpost : ${userid} ${posttitle} ${postBody} ${reaction} ${Tags}  `)
    
    dispache({
    type : 'addpost',
    payload : {
      id: Date.now(),
      title:posttitle,
      body:postBody,
      reaction:reaction,
      userid:userid,
      tags:Tags
    }
    })
    };


const addintialpost =(posts)=>
    {
dispache({
  type : 'addintialpost',
  payload : {
    posts,

  }
})


    }
const deletpost = (cartid)=>{

  console.log(`delet${cartid}`)

dispache({

  type : 'deletpost',
  payload : {
  cartid,
  }
})
}

return <Postlist.Provider value={{postlist , addpost , deletpost , addintialpost}}>{children}</Postlist.Provider>

}

export default Postlistprovider;

const defaultpost = [
  {
  id: '1',
  title:'going to mumbai',
  body:'frend ia m going to mumbai',
  reaction:20,
  userid:'user-9',
  tags:["welcom " , "mumbai" , "enjoy"]
  }

  ,


  {
    id: '2',
    title:'going to mumbai',
    body:'frend ia m going to mumbai',
    reaction:60,
    userid:'user-9',
    tags:["welcom " , "mumbai" , "enjoy"]
    }


    ,


    {
      id: '3',
      title:'going to mumbai',
      body:'frend ia m going to mumbai',
      reaction:40,
      userid:'user-9',
      tags:["welcom " , "mumbai" , "enjoy"]
    }

];
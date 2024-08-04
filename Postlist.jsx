import { useContext, useState } from 'react'
import Card from './Card'
import { Postlist as postdata } from './store/Postliststore'
import Welcome from './componend/Welcome'
import Loadingspiner from './Loadingspiner';



export default function Postlist() {

  const {postlist , addintialpost} = useContext(postdata);
  const [fetching , setfetching] = useState(false);



  return (
    <div>
      
     
      {fetching && <Loadingspiner/>}
      {!fetching && postlist.length === 0 && <center><Welcome/></center>}
      {!fetching && postlist.map((cart)=>(<Card key={cart.id} cart={cart}/>))}
       
       
    </div>
  )
}

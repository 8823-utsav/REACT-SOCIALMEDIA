import styles from "./App.module.css";

import React, { useContext } from 'react'
import { Postlist as deledata } from "./store/Postliststore";

export default function Card({cart}) {

  const { deletpost } = useContext(deledata);




  return (
    <div classname={styles.PostCard}>
      <div >
 
  <div class="card-body">
    <button>
           <div onClick={() => deletpost(cart.id)}>Delet</div>
          </button>
        
    <h5 class="card-title">{cart.title}</h5>
    <p class="card-text">{cart.body}</p>
    <p>{cart.reaction}{""}</p>
    {/* {cart.tags.map((tag) => (
            <span key={tag} class="badge rounded-pill text-bg-primary">
              {tag}
            </span>
          ))}
   */}
    
  </div>
</div>
    </div>
  )
}

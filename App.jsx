//PART - 1   APP.JSX

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Postlist from "./Postlist";
import Createpost from "./Createpost";
import Postlistprovider from "./store/Postliststore";

export default function App() {
  const [state, setstate] = useState("Home");

  return (
    <Postlistprovider>
      <div>
        <Header state={state} setstate={setstate}></Header>
        <hr />
        {state === "Home" ? <Postlist></Postlist> : <Createpost></Createpost>}

        <Footer></Footer>
      </div>
    </Postlistprovider>
  );
}

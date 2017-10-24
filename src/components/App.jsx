import React from "react";

import Menu from "./views/Menu";
import Title from "./views/Title";
import Main from "./views/Main";
import Footer from "./views/Footer";

const App = () => <div className="wrapper">
  <Menu/>
  <div className="container">
    <Title/>
    <Main/>
  </div>
  <Footer/>
</div>

export default App;
import "./App.css";
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { Grid } from "../elements";
import Header from "../components/Header";

function App() {
  return (
    <React.Fragment>
      <Grid>
        <Header></Header>
        <BrowserRouter>
          <Route path="/" exact component={PostList} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </BrowserRouter>
      </Grid>
    </React.Fragment>
  );
}

export default App;

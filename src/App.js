import React, {Component} from 'react';
import './App.css';
import Layout from "./Components/Layout/Layout";
import Contents from "./Components/Content/Contents";
import Edit from "./Components/Edit/Edit";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Layout/>
        <Switch>
          <Route path="/pages/admin" component={Edit}/>
          <Route path="/pages/:name" component={Contents}/>
        </Switch>
        </BrowserRouter>
    )
  }
}

export default App;

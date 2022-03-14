import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import RandomMeal from "./components/RandomMeal/RandomMeal";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/categories' component={Categories} />
          <Route exact path='/random' component={RandomMeal} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";

import About from "../pages/about";
import Contact from "../pages/contact";
import PageNotFound from "../helpers/pageNotFound";
import Home from "../pages/home";
import FillForm from "../pages/fillForm";
import TableExample from "../pages/tableExample";
import HomePageOfShopping from "../pages/shopping/shop";
import Cart from "../pages/shopping/cart";
import MenuBar from "../shared/layout/menuBar/menu";

function Routes() {
    return (
        <BrowserRouter>
            <MenuBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about/:firstName" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/fillform" component={FillForm}/>
                <Route path="/table" component={TableExample}/>
                <Route path="/shop" component={HomePageOfShopping}/>
                <Route path="/cart" component={Cart}/>
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
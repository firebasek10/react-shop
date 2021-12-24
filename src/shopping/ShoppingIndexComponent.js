import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ElectronicsComponent from "./ElectronicsComponent";
import HomeComponent from "./HomeComponent";
import FootwearComponent from "./FootwearComponent";
import NoFoundComponent from "./NoFoundComponent";
import DetailsComponent from "./DetailsComponent";
import ShopComponent from "./ShopComponent";
import Component from "./Component";
export default function ShoppingIndexComponent() {
  return (
    <div className="container-fluid">
      <header className="bg-danger text-white text-center p-2">
        <h1>
          {" "}
          <span className="bi bi-cart4"></span> Shopping Online
        </h1>
      </header>
      <Router>
        <div className="row">
          <div className="col-3">
            <ul>
              <li>
                {" "}
                <Link to="/home">Home</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/electronics">Electronics</Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/footwear">Footwear</Link>{" "}
              </li><li>
                {" "}
                <Link to="/categories">Categories</Link>{" "}
              </li>
            </ul>
          </div>
          <div className="col-9">
              <div className="d-flex">
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/home" exact component={HomeComponent} />
              <Route path="/footwear" exact component={FootwearComponent} />
              <Route
                path="/electronics"
                exact
                component={ElectronicsComponent}
              />
              <Route path='/categories' exact component={Component}/>
              <Route path='/details/:id/:name' exact component={DetailsComponent} />
              <Route path='/products/:category' exact component={ShopComponent} />
              <Route path="*" exact component={NoFoundComponent} />
            </Switch>
          </div></div>
        </div>
      </Router>
    </div>
  );
}

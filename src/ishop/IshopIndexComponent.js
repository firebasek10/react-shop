import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useHistory,
} from "react-router-dom";
import HomeComponent from "./HomeComponent";
import AdminDashBoardComponent from "./AdminDashBoardComponent";
import AdminLoginComponent from "./AdminLoginComponent";
import AdminRegisterComponent from "./AdminRegisterComponent";
export default function IshopIndexComponent() {
  // const history = useHistory();
  return (
    <div className="container-fluid">
      <Router>
        <header className="bg-danger text-center text-white">
          <h1>Ishop- Smart Shopping</h1>
        </header>

        <section className="row">
          <div className="col-3">
            <ul>
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/admindashboard">ADMIN DASHBOARD</Link>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <Switch>
              <Route path="/"  exact component={HomeComponent}></Route>
              <Route path="/home" component={HomeComponent}></Route>
              <Route
                path="/admindashboard"
                component={AdminDashBoardComponent}
              ></Route>
              <Route
                path="/adminlogin"
                component={AdminLoginComponent}
              ></Route>
               <Route
                path="/adminregister"
                component={AdminRegisterComponent}
              ></Route>
            </Switch>
          </div>
        </section>
      </Router>
    </div>
  );
}

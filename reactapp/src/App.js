import Register from "./pages/registation";
import User from "./pages/User/User";
import Auth from "./pages/Auth";
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
        <Route path="/user" exact>
          <User />
        </Route>
          <Route path="/user/signup" exact>
              <Register/>
          </Route>
          <Route path="/login" component={Auth}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

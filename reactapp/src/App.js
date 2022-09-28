import Register from "./pages/registation";
import User from "./pages/User/User";
import Auth from "./pages/Auth";
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import  LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/dashboard/dashboard';


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
        <Switch>
        <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/user" exact>
          <User />
        </Route>
          <Route path="/user/signup" exact>
              <Register/>
          </Route>
          <Route path="/" component={Auth}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

// import { Login,Signup,Dashboard } from './pages';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Signup from './pages/signup/signup';
// import DataStoreProvider from './store/context';
import DashboardPractice from "./pages/DashboardPractice/DashboardPractice";
import { useContextStore } from "./store/context";


function App() {
  const { state, dispatch } = useContextStore();

  useEffect(() => {
    dispatch({ type: 'stoploading' })
  }, []
  )


  return (
    <div className="App">
      {state.apploading && <h4>application loading.....</h4>}
      {state.initializeapp &&
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboardpractice" component={DashboardPractice} />
        </Switch>

      }

      {/* <Login/>
     <Signup/>
     <Dashboard/>
    */}
    </div>

  );
}

export default App;

import React from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
// import Login from './pages/Login';
// import Reg from './pages/Reg';
import Main from './pages/main/Main';
// import ErrorPage from './pages/ErrorPage';
const Loading = ()=><div>加载中...</div>

const Login = Loadable({
  loader:()=>import(/*webpackChunkName:'login'*/'./pages/Login'),
  loading:Loading
});

const Reg = Loadable({
  loader:()=>import(/*webpackChunkName:'reg'*/'./pages/Reg'),
  loading:Loading
});

const ErrorPage = Loadable({
  loader:()=>import(/*webpackChunkName:'errorPage'*/'./pages/ErrorPage'),
  loading:Loading
});
const Forgot = Loadable({
  loader:()=>import(/*webpackChunkName:'forgot' */'./pages/Forgot'),
  loading:Loading
});






function App() {
  return (
    <HashRouter>
     <Switch>
       <Route path="/" exact component={Main}/>
       <Route path="/login" component={Login}/>
       <Route path="/reg" component={Reg}/>
       <Route path="/forgot" component={Forgot}/>
       <Redirect to="/"/>
       {/* <Route component={ErrorPage}/> */}
     </Switch>
    </HashRouter>
  );
}

export default App;

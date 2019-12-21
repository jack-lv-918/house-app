import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
// import Login from './pages/Login';
// import Reg from './pages/Reg';
import Main from './pages/main/Main';
// import ErrorPage from './pages/ErrorPage';

//redux
import { Provider } from 'react-redux'
import store from './store';

const Loading = () => <div>加载中...</div>

const Login = Loadable({
  loader: () => import(/*webpackChunkName:'login'*/'./pages/Login'),
  loading: Loading
});

const Reg = Loadable({
  loader: () => import(/*webpackChunkName:'reg'*/'./pages/Reg'),
  loading: Loading
});

const ErrorPage = Loadable({
  loader: () => import(/*webpackChunkName:'errorPage'*/'./pages/ErrorPage'),
  loading: Loading
});
const Forgot = Loadable({
  loader: () => import(/*webpackChunkName:'forgot' */'./pages/Forgot'),
  loading: Loading
});

const CityList = Loadable({
  loader: () => import(/*webpackChunkName:'cityList' */'./pages/CityList'),
  loading: Loading,
});
const Search = Loadable({
  loader: () => import(/*webpackChunkName:'search' */'./pages/Search'),
  loading: Loading,
});
const MapPage = Loadable({
  loader: () => import(/*webpackChunkName:'mapPage' */'./pages/MapPage'),
  loading: Loading,
});






function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/forgot" component={Forgot} />
          <Route path="/cityList" component={CityList} />
          <Route path="/search" component={Search} />
          <Route path="/mapPage" component={MapPage} />
          <Redirect to="/" />
          {/* <Route component={ErrorPage}/> */}
        </Switch>
      </HashRouter>
    </Provider>

  );
}

export default App;

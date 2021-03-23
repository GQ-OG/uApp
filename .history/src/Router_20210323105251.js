import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, HashRouter, Switch } from 'react-router-dom'
import Test from './pages/Test'
import { appProvider, useApp } from './stores/initialState/context'
import 'antd-mobile/dist/antd-mobile.css';

const App = appProvider(() => {
  const [store] = useApp()
  console.log(store, "store")
  return (
    <Router>
      <Route path="/test" render={props => <Test {...props} />}></Route>
    </Router>
  )
})
const A = () => {
  return (
    <Router>
      <Route path="/test" render={props => <Test {...props} />}></Route>
    </Router>
  )
}
console.log(App, "App<<<<<<<<<<<<<<<<<<")
console.log(A, "App>>>>>>>>>>>>>>>>>>")
// export default A
export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={A} />
      </Switch>
    </Router>
  );
};

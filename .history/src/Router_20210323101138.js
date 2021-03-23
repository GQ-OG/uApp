import logo from './logo.svg';
import './App.css';
import { Route, Router, HashRouter, Switch } from 'react-router-dom'
import Test from './pages/Test'
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
    // <div className="App">
      <Switch>
        <Route path="/test" component={Test}></Route>
      </Switch>
    // </div>
  );
}

export default App;

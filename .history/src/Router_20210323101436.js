import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, HashRouter, Switch } from 'react-router-dom'
import Test from './pages/Test'
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
      <Router>
        <Route path="/test" component={Test}></Route>
      </Router>
  );
}

export default App;

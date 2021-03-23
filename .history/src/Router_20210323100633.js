import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
    <div className="App">
      <Route>
        <Router path="/test"></Router>
      </Route>
    </div>
  );
}

export default App;

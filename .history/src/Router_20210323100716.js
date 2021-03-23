import logo from './logo.svg';
import './App.css';
import { Route, Router } from 'react-router-dom'
import Test from './pages/Test'
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
    <div className="App">
      <Route>
        <Router path="/test" render={() => <Test />}></Router>
      </Route>
    </div>
  );
}

export default App;

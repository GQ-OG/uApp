import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, HashRouter, Switch } from 'react-router-dom'
import Test from './pages/Test'
import { appProvider, useApp } from './stores/initialState/context'
import 'antd-mobile/dist/antd-mobile.css';

// const App = appProvider(() => {
//   const [store] = useApp()
//   console.log(store, "store")
//   return (
//     <Router>
//       <Route path="/test" component={Test}></Route>
//     </Router>
//   )
// })

const App = () => (
  <Router>
    <Route path="/test" component={Test}></Route>
  </Router>
)

export default App;

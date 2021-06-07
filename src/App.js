import './App.css';
import TopNavbar  from './components/top-navbar';
import Hem from './components/home';
import Newton from './components/newton';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <TopNavbar/>
      <Switch>
        <Route exact={true}path="/" component={Hem}/>
        <Route path="/newton" component={Newton}/>
      </Switch>
    </Router>
  );
}

export default App;

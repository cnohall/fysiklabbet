import './App.css';
import TopNavbar  from './components/top-navbar';
import Hem from './components/home';
import Newton from './components/navbar/newton';
// import Wip from './components/navbar/wip';
import Krafter from './components/navbar/krafter';
import ResulterandeKraft from './components/navbar/resulterande-kraft';
import Frilaggning from './components/navbar/frilaggning';
import Kraftresultanter from './components/navbar/kraftresultanter';
import Kraftmoment from './components/navbar/kraftmoment';
import Havstangsprincipen from './components/navbar/havstangsprincipen';
import Laddningar from './components/navbar/laddningar';
import Falt from './components/navbar/falt';
import Kretsar from './components/navbar/kretsar';
import OmOss from './components/navbar/om-oss';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <TopNavbar/>
      <Switch>
        <Route exact={true}path="/" component={Hem}/>
        <Route path="/newton" component={Newton}/>
        <Route path="/krafter" component={Krafter}/>
        <Route path="/resulterande-kraft" component={ResulterandeKraft}/>
        <Route path="/frilaggning" component={Frilaggning}/>
        <Route path="/kraftresultanter" component={Kraftresultanter}/>
        <Route path="/kraftmoment" component={Kraftmoment}/>
        <Route path="/havstangsprincipen" component={Havstangsprincipen}/>
        <Route path="/laddningar" component={Laddningar}/>
        <Route path="/falt" component={Falt}/>
        <Route path="/kretsar" component={Kretsar}/>
        <Route path="/om-oss" component={OmOss}/>
      </Switch>
    </Router>
  );
}

export default App;

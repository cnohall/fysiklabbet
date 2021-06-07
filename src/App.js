import logo from './logo.svg';
import './App.css';
import  TopNavbar  from './components/top-navbar';

function App() {
  return (
    <div className="App">
      <TopNavbar/>
      <header className="App-header">
        <h1>Välkommen till Fysiklabbet!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Fysiklabbet hjälper dig som pluggar fysik på högskola eller universitet</h3>
      </header>
    </div>
  );
}

export default App;

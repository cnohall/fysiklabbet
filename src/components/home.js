import logo from '../logo.svg';

function Hem() {
  return (
    <div className="App pt-3">
        <header className="App-header">
        <h1>Välkommen till Fysiklabbet!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Fysiklabbet hjälper dig som pluggar fysik på högskola eller universitet</h3>
        </header>
    </div>
  );
}

export default Hem;

import underUppbyggnad from '../../images/under_uppbyggnad.jpg';

function Krafter() {
  return (
    <div className="App pt-3">
        <header className="App-header">
        <h1>Krafter</h1>
        <img src={underUppbyggnad} className="rounded" alt="logo" />
        <h3>Den här sektionen är under uppbyggnad</h3>
        </header>
    </div>
  );
}

export default Krafter;

import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard fName={"Jane"} lName={"Doe"} age={45} color={"Black"} />
      <PersonCard fName={"John"} lName={"Smith"} age={88} color={"Brown"} />
    </div>
  );
}

export default App;

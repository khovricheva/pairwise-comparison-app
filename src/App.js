import './App.css';
import Entry from './components/Entry/Entry';
// import Comparison from './components/Comparison/Comparison';

function App() {
  return (
    <div className='App'>
      <header>Pairwise Comparison App</header>
      <div className='container'>
        <Entry />
        {/* <Comparison /> */}
      </div>
    </div>
  );
}

export default App;

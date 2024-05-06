import './App.css';
import Averagesection from './components/Averagesection';
import Backtotop from './components/Backtotop';
import Herosection from './components/Herosection';
import Staticticessection from './components/Staticticessection';
import Worksection from './components/Worksection';

function App() {
  return (
    <div className=' bg-black'>
      <Herosection />
      <Worksection />
      <Staticticessection/>
      <Averagesection/>
      <Backtotop/>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Day1 from './day1/Day1';
import Day2 from './day2/Day2';
import Day3 from './day3/Day3';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Day1 />} />
        <Route path='/match2/day1' element={<Day1 />} />
        <Route path='/match/day2' element={<Day2 />} />
        <Route path='/match/day3' element={<Day3 />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import Information from './users/Information';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/Information' element={[<Home key="home" />, <Information key="inInformationfo" />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
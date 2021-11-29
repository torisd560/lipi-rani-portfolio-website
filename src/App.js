import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Works from '../src/Pages/Works/Works'
import Contact from '../src/Pages/Contact/Contact'
import NotFound from '../src/Pages/NotFound/NotFound'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='about' element={<About></About>} />
          <Route path='work' element={<Works></Works>} />
          <Route path='contact' element={<Contact></Contact>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

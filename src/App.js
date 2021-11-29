import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Works from '../src/Pages/Works/Works'
import Contact from '../src/Pages/Contact/Contact'
import NotFound from '../src/Pages/NotFound/NotFound'
import Header from '../src/Pages/Shared/Header/Header'
import HeaderHome from '../src/Pages/Shared/Header/HeaderHome/Header'


function App() {
  return (
    <div className='App'>
      <div className="row m-0">
        <div className='col-md-2  p-0' style={{ backgroundColor: '#0a192f', height: '100vh' }}>
          <Header></Header>
        </div>
        <div className='col-md-10 text-center p-0'>
          <BrowserRouter>
            <HeaderHome></HeaderHome>
            <Routes>
              <Route path='/' element={<Home></Home>} />
              <Route path='home' element={<Home></Home>} />
              <Route path='about' element={<About></About>} />
              <Route path='work' element={<Works></Works>} />
              <Route path='contact' element={<Contact></Contact>} />
              <Route path='*' element={<NotFound></NotFound>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;

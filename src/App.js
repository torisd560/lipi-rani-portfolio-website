import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home'
import About from '../src/Pages/About/About'
import Works from '../src/Pages/Works/Works'
import NotFound from '../src/Pages/NotFound/NotFound'
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Blog from './Pages/Blog/Blog';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='home' element={<Home></Home>} />
          <Route path='about' element={<About></About>} />
          <Route path='work' element={<Works></Works>} />
          <Route path='blog' element={<Blog></Blog>} />
          <Route path='*' element={<NotFound></NotFound>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound'
import { Route, Routes } from 'react-router-dom';
import Postdetails from './components/Postdetails/Postdetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path={'/home'} element={<Home></Home>} ></Route>
        <Route path='/posts' element={<Posts></Posts>} >
          <Route path=':postId' element={<Postdetails></Postdetails>} ></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

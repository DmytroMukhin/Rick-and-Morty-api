
import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './pages/about';
import Characters from './pages/characters';
import Login from './pages/login';

function App() {

  return (
   <BrowserRouter>
      <Routes>
          <Route path='' element={<Login/>} />
          <Route path="/characters/:id" element={<About/>}/>
          <Route path='/characters' element={<Characters/>}/> 
      </Routes>
   </BrowserRouter>
  );
}

export default App;

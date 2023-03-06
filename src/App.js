
import React from 'react';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Success from './pages/Success'
import Login from './pages/Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
 
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes> 
                <Route path="/p4" element={<Home/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/success" element={<Success/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;

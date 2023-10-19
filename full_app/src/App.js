import Route1 from './pages/welcomepage/route';
import { Route, Routes } from 'react-router-dom';
import { RegistrationForm } from './pages/welcomepage/signuppage';
import { SimpleRegistrationForm } from './pages/welcomepage/loginpage';
import Problem  from './pages/problempage/problem.js'
import Question from './pages/questionpage/question';
import Compilerr from './pages/compilerpage/compiler';

export default function App() {
  return (
      <Routes>
       <Route  path='/' element={< Route1 />}></Route>
       <Route  path='/signin' element={< SimpleRegistrationForm />}></Route>
       <Route  path='/signup' element={< RegistrationForm />}></Route>
       <Route  path='/user/:username' element={< Problem />}></Route> 
       <Route  path='/questions/numpy' element={< Question />}></Route> 
       <Route  path='/questions/tensorflow' element={< Question />}></Route> 
       <Route  path='/questions/pandas' element={< Question />}></Route> 
       <Route  path='/questions/keras' element={< Question />}></Route> 
       <Route  path='/compiler' element={< Compilerr />}></Route> 

       </Routes>        
    
  );
}

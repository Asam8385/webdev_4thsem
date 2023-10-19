
import { useState, useEffect } from 'react';
import Question from './component/question';
import Nav from './component/navbar';
import Compiler from './component/compiler';
import { useLocation } from 'react-router-dom';



export default function Compilerr() {
    const [code, setCode] = useState("//write your code");
    const [output, setOutput] = useState('');
    

  return (
    <div className='overflow-x-hidden overflow-y-hidden h-[100vh]' >
     <Nav/>
     <div className='flex flex-row h-[90vh] w-[100vw] overflow-x-hidden'>
         <Question  />
         <Compiler/>
     </div>
     
    </div>

  
  );
}


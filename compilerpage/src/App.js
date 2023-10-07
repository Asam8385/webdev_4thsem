

import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import Question from './component/question';
import Nav from './component/navbar';
import Compiler from './component/compiler';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";



export default function Home() {
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


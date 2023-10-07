import React from 'react';
import { useState, useEffect } from 'react';
import AceEditor from "react-ace";
import  Axios  from 'axios';
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";


export default function Compiler() {

    const [output, setOutput] = useState('thia');
    const [code,setcode] = useState('')
  const runPythonScript = async (code) => {
    try {
      const response = await Axios.post('http://localhost:3001/run-python', { code });
      setOutput(response.data.output);
    } catch (error) {
      console.error(error);
    }
  };

  return (
     <section className='overflow-y-scroll w-[50vw] overflow-x-hidden bg-gray-900 '>
       <AceEditor
        fontSize={18}
        width='49vw'
        height='550px'
        mode="python"
        theme="dracula"
        name="UNIQUE_ID_OF_DIV"
        onChange={newcode => {setcode(newcode)}}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
           enableBasicAutocompletion: true,
           enableLiveAutocompletion: true,
      
        }}
         />
         <div>
         <div className='flex flex-row-reverse pr-10'>
                <button onClick={() => runPythonScript(code)} className="bg-green-400 mt-[30px] ml-[20px] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                      <span>RUN</span>
                  </button>
                <button className="bg-green-400 mt-[30px] ml-[20px] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                      <span>Submit</span>
                </button>
         </div>
         <div className='text-white text-center mb-10'>
          {output}
         </div>
         </div>
    </section>
  
  );
}


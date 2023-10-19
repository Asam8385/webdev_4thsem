import React from 'react';
import { useState, useEffect } from 'react';
import AceEditor from "react-ace";
import  Axios  from 'axios';
import "brace/theme/dracula";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";
import { json, useLocation } from 'react-router-dom';

export default function Compiler() {
  const [output, setOutput] = useState('');
  const [code, setcode] = useState('');
  const [comment, setcomment] = useState('Sorry Try Again!!');
  const [dis, setdis] = useState(false);
  const loc = new useLocation();
  const [correctanswer, setcorrectanswer] = useState(loc.state.selectedquestion.answer);

  useEffect(() => {
    if (correctanswer.trim() === output.trim()) {
      setcomment('Wow Congratulation!!');
      console.log('hai');
    }
    else
    {

      setcomment('Sorry Try Again!!');

    }
  }, [correctanswer, output]);

  const runPythonScript = async (code) => {
    try {
      const response = await Axios.post('http://localhost:3001/run-python', { code });
      setdis(true);
      console.log(response.data.output);
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
         {dis && (
  <div className="text-white text-center mt-6">
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="text-2xl font-bold text-green-400 mb-4">Output</div>
      <div className="text-gray-200 bg-gray-900 p-4 rounded-lg shadow-md mb-4">
        <div>
          <strong className="text-blue-400">Program Output:</strong>
        </div>
        <div className="text-white">{output}</div>
      </div>
      <div className="text-gray-200 bg-gray-900 p-4 rounded-lg shadow-md mb-4">
        <div>
          <strong className="text-blue-400">Correct Answer:</strong>
        </div>
        <div className="text-white">{correctanswer}</div>
      </div>
      <div className="text-2xl font-bold text-blue-400 mb-4">Comment</div>
      <div className="text-white text-xl mb-4">{comment}</div>
    </div>
  </div>
)}

         </div>)
    </section>
  
  );
}


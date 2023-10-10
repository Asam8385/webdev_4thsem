
import './App.css';
import { StickyNavbar } from './component/navbar';
import Option from './component/options';
import { Carddefault} from './component/card';


function App() {
  return (
    <div className='m-0 bg-gradient-to-r from-gray-900 to-gray-700' >
      <StickyNavbar  />
      <div className='flex flex-row flex-wrap p-2 justify-center'>
          <Carddefault />
          <Carddefault/>
          <Carddefault/>
          <Carddefault/>
      </div> 
      
    </div>
  );
}

export default App;

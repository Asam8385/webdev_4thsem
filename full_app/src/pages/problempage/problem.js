
import { StickyNavbar } from './component/navbar';
import { Carddefault} from './component/card';


function Problem() {

  return (
    <div className='m-0 bg-gray-900' >
      <StickyNavbar  />
      
      <div className='flex flex-row flex-wrap p-2 justify-center items-center'>
          <Carddefault title = "numpy" image = "numpy.png" />
          <Carddefault title = "keras" image = "keras.png"/>
          <Carddefault title = "tensorflow" image = "TensorFlow.png"/>
          <Carddefault title = "pandas" image = "Pandas.png"/>
      </div> 
      <footer className="bg-gray-800 text-white p-4 text-center">
      &copy; 2023 MLLEARN 
    </footer>
    </div>
  );
}

export default Problem;

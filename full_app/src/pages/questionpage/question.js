
import { SimpleCard } from './component/card';
import { NavbarDark } from './component/nav';

function Question() {

  
  return (
    <div className='bg-gray-900'>
      <NavbarDark/>
      <SimpleCard/>
      <footer className="bg-gray-800 text-white mt-4 p-4 text-center">
      &copy; 2023 MLLEARN 
    </footer>
    </div>
   
  );
}

export default Question;

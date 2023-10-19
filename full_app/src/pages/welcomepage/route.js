import { Footer, Navbar } from './firstcomponents';
import { About, Feedback, GetStarted, Hero, Insights,  World } from './firstsections';
import { NavbarWithMegaMenu } from './firstcomponents/Navbar';

export default function Route1() {
  return (
    <div className="overflow-hidden bg-gradient-to-l from-indigo-900 to-black">
    <div className='relative'>
    <NavbarWithMegaMenu className = "border-b-3 border-yellow-600" />
    <Hero />
    <hr class="border-t-3 border-white mt-[30px]"></hr>
    </div>
    <div className="relative ">
      <About />
      <hr class="border-t-3 border-white mt-[30px]"></hr>
    </div>
    <div className="relative">
      <GetStarted image = '/TensorFlow.png' />
      <hr class="border-t-3 border-white mt-[30px]"></hr>
      <GetStarted image = '/keras.png' />
      <hr class="border-t-3 border-white mt-[30px]"></hr>
      <GetStarted image = '/numpy.png' />
      <hr class="border-t-3 border-white mt-[30px]"></hr>
      <GetStarted image = '/pandas.png' />
      <hr class="border-t-3 border-white mt-[30px]"></hr>
    </div>
    <World />
    <hr class="border-t-3 border-white mt-[30px]"></hr>
    <div className="relative">
      <Feedback />
      <hr class="border-t-3 border-white mt-[30px]"></hr>
    </div>
    <Footer />
  </div>
  );
}
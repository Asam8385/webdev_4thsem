import Image from 'next/image'
import { Footer, Navbar } from '../firstcomponents';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../firstsections';


export default function Home() {
  return (
    <div className="overflow-hidden bg-gradient-to-l from-white to-blue-200">
    <div className='relative'>
    <Navbar className = "border-b-3 border-yellow-600" />
    <Hero />
    <hr class="border-t-3 border-black mt-[30px]"></hr>
    </div>
    <div className="relative ">
      <About />
      <hr class="border-t-3 border-black mt-[30px]"></hr>
      <Explore />
      <hr class="border-t-3 border-black mt-[30px]"></hr>
    </div>
    <div className="relative">
      <GetStarted />
      <hr class="border-t-3 border-black mt-[30px]"></hr>
      <WhatsNew />
      <hr class="border-t-3 border-black mt-[30px]"></hr>
    </div>
    <World />
    <hr class="border-t-3 border-black mt-[30px]"></hr>
    <div className="relative">
      <Insights />
      <hr class="border-t-3 border-black mt-[30px]"></hr>
      <Feedback />
      <hr class="border-t-3 border-black mt-[30px]"></hr>
    </div>
    <Footer />
  </div>
  );
}

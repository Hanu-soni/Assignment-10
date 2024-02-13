import logo from './logo.svg';
import './App.css';
import Section1 from './Sections/Navbar/section1';
import Section2 from './Sections/Navbar/section2';
import Salesimg from './Sections/Section-2/Salesimg';
import Products from './Sections/Section-3/products';
import BestDealPro from './Sections/Section-3/BestDealPro';
import CoupanMain from './Sections/Section-4/CoupanMain';
import Main from './Sections/Section-5/Main';
import Main6 from './Sections/Section-6/Main6';
import Main7 from './Sections/Section-7/Main7';
import Main8 from './Sections/Section-8/Main8';
import { Main9 } from './Sections/Section-9/Main9';
import Main10 from './Sections/Section-10/Main10';




function App() {
  return (
    <div className='gap-2'>
      
      <Section1/>
      <Section2/> 
       <Salesimg/>
       <Products/>
       <BestDealPro/>
       <CoupanMain/>
       <Main/>
       <Main6/>
       <Main7/>
       <Main8/>
       <Main9/>
       <Main10/>
      
    

      
    </div>
  );
}

export default App;

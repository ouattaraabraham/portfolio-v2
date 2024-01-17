import Apropos from "./components/Apropos";
import Contacter from "./components/Contacter";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Temoignage from "./components/Temoignage";
import Projet from "./components/projet"
function App() {
  return (
    <div id="app" className='bg-[#111927]  text-[#8892b0] font-SatoshiRegular'>
       <NavBar/>
       <div id="HBF" className=' px-6 mobil:px-12 md:px-24  lg:px-32  flex flex-col justify-center'>
        <Home/>
        <Apropos/>
        <Projet/>
        <Temoignage/>
        <Contacter/>
        <Footer/>
       </div>
    </div>
  );
}

export default App;

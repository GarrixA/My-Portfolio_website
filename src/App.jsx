import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Parallax from './Components/Parallax/Parallax';
import './index.css';
const App = ()=> {

  return (
    <>
      <section id='Home'>
        <Navbar/>
        <Home/>
      </section>
      <section id="Services"><Parallax type="Services"/></section>
      <section>Services</section>
      <section id="Portfolio"><Parallax type="Portfolio"/></section>
      <section>Portifolio 1</section>
      <section>Portifolio 2</section>
      <section>Portifolio 3</section>
      <section id='Contact'>Contacts</section>
    </>
  )
}

export default App

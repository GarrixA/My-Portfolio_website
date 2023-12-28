import Contacts from './Components/Contacts/Contacts';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Parallax from './Components/Parallax/Parallax';
import Portfolio from './Components/Porfolio/Portfolio';
import Services from './Components/Services/Services';
import './index.scss';
const App = ()=> {

  return (
    <>
      <section id='Home'>
        <Navbar/>
        <Home/>
      </section>
      {/* <section id="Services"><Parallax type="Services"/></section> */}
      {/* <section><Services/></section> */}
      {/* <section id="Portfolio"><Parallax type="Portfolio"/></section> */}
      {/* <Portfolio/> */}
      
      {/* <section id='Contact'><Contacts/></section> */}
    </>
  )
}

export default App

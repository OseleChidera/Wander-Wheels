import './App.css';
import './desktop.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Whyus from './components/Whyus';
import Cards from './components/Cards';
import Moments from './components/Moments';
import Booknow from './components/Booknow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Whyus/>
      <Cards/>
      <Moments/>
      <Booknow/>
      <Footer/>
    </div>
  );
}

export default App;

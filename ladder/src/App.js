import './App.css';
import Banner from './components/banner/Banner';
import Testimonials from './components/testimonials/Testimonials';
import Cards from './components/cards/Cards';
import Skills from './components/skills/Skills'


function App() {
  return (
    <div className="App">
      <Skills/>
      <Cards/>
      <Testimonials/>
      <Banner/>
    </div>
  );
}

export default App;

import About from "./components/About";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Open from "./components/Open";
import Rat from "./components/Rat";
import Serv from "./components/Serv";
import Tips from "./components/Tips";
import Why from "./components/Why";
const App = () => {
  return (
    <div className="section__padding-x">
      <NavBar />
      <Hero />
      <Open />
      <Serv />
      <About />
      <Why />
      <Rat />
      <Tips />
      <Blog />
    </div>
  );
};

export default App;

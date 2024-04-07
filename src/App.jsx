import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Open from "./components/Open";
import Serv from "./components/Serv";
const App = () => {
  return (
    <div className="section__padding-x">
      <NavBar />
      <Hero />
      <Open />
      <Serv />
      <About />
    </div>
  );
};

export default App;

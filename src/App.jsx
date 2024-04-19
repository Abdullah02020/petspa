import About from "./components/About";
import Blog from "./components/Blog";
import Cute from "./components/Cute";
import Footer from "./components/Footer";
import Footertow from "./components/Footertow";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Open from "./components/Open";
import Rat from "./components/Rat";
import Serv from "./components/Serv";
import Tips from "./components/Tips";
import Why from "./components/Why";

const App = () => {
  return (
    <div className="">
      {" "}
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
        <Cute />
      </div>
      <Footer />
      <Footertow />
    </div>
  );
};

export default App;

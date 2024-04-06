import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Open from "./components/Open";
const App = () => {
  return (
    <div className="section__padding-x">
      <NavBar />
      <Hero />
      <Open />
    </div>
  );
};

export default App;

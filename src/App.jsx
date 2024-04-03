import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Community from "./components/community";
import Back from "./components/Back";
import Chat from "./components/Chat";
import Walt from "./components/Walt";
import Dapps from "./components/Dapps";
import Jamp from "./components/Jamp";
import End from "./components/End";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="P-b">
      <NavBar />
      <Hero />
      <div className="section__padding-x bt">
        <Community />
      </div>
      <Back />
      <div className="section__padding-x bb">
        <Chat />
        <Walt />
        <Dapps />
        <Jamp />
      </div>
      <End />
      <Footer />
    </div>
  );
};

export default App;

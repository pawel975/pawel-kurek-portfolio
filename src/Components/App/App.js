import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import "./App.scss";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import gsap from "gsap";

// register gsap scrollTrigger for whole app
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

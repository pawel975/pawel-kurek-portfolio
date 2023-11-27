import Footer from "../Footer/Footer.tsx";
import Main from "../Main/Main.tsx";
import Nav from "../Nav/Nav.tsx";
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

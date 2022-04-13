import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Ecosystem from './components/ecosystem/Ecosystem';
import FAQ from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Roadmap from './components/roadmap/Roadmap';
import Sponsor from './components/sponsor/Sponsor';
import Token from './components/token/Token';
import Tokenomics from './components/tokenomics/Tokenomics';
import What from './components/what/What';
import Why from './components/why/Why';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <What/>
      <Ecosystem/>
      <Why/>
      <Tokenomics/>
      <Token/>
      <Sponsor/>
      <Roadmap/>
      <FAQ/>
      <Footer/>

    </div>
  );
}

export default App;

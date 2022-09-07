import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import Card from './components/card/Card.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Card /> 
      <Footer /> 
    </div>
  );
}

export default App;

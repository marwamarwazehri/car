
import './App.css';
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About'
import Models from './Models/Models'
import Choose from './Choose/Choose'
import Testimonials from './Testimonials/Testimonials';
import Questions from './Questions/Questions'
import Aplication from './App/App'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Models/>
     <Choose/>
     <Testimonials/>
     <Questions/>
     <Aplication/>
     <Footer/>
    </div>
  );
}

export default App;

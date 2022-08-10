import "./App.css";
import About from "./pages/About.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import { Home } from "./pages/Home";



function App() {
  return (
    <>
    <Home />
    <Header />
    <About />
    <Contact />
    <Footer />
    </>
    
  )
}

export default App;

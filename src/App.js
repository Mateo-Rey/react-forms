import "./App.css";
import About from "./pages/About.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import { Home } from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home />}  />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='*' element={<h4>Err0r Page Not Found</h4>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;

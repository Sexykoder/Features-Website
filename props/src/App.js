import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About'
import Body from './components/Body'
import Navbar from './components/Navbar'
import "./components/components.css";
import BMICalc from './components/BMICalc';
import LoveCalc from './components/LoveCalc';
import Weather from './components/Weather';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Body/>
      <Routes>
      <Route path="/" element={<About />} />
        <Route path="/bmi" element={<BMICalc />} />
        <Route path="/love" element={<LoveCalc />} />
        <Route path="/weather" element={<Weather/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App


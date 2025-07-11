import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { Loadingscreen } from './components/common/LoadingScreen';
import Homepage from './Pages/userPage/Homepage';
import Recipes from './pages/userPage/Recipes'
import './App.css';




function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <Loadingscreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/recipes" element={<Recipes />} />
          </Routes>

          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;

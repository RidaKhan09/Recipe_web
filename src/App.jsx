import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import { Loadingscreen } from './components/common/LoadingScreen';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Homepage from './Pages/userPage/Homepage';
import Recipes from './pages/userPage/Recipes'


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

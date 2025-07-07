import { useState } from 'react';
import './App.css';
import { Loadingscreen } from './components/common/LoadingScreen';
import Navbar from './components/common/Navbar';
import Homepage from './Pages/UserPage/homepage';
import Footer from './components/common/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <Loadingscreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
        <Navbar />
        <Homepage />
        <Footer/>

        </>
      )}
    </>
  );
}

export default App;

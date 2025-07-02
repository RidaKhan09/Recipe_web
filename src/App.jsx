import { useState } from 'react'
import './App.css'
import { Loadingscreen } from './components/LoadingScren'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/hero'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}
      <div >
      <Navbar/>
      <Hero/>
      </div>
    </>
  );
}

export default App

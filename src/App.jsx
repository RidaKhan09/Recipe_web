import { useState } from 'react'
import './App.css'
import { Loadingscreen } from './components/LoadingScren'
import Navbar from './components/Navbar/Navbar'
import Hero from './Pages/Home/hero'
import ShareRecipe from './Pages/Home/ShareRecipe'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}
      <div >
      <Navbar/>
      <Hero/>
      <ShareRecipe/>
      </div>
    </>
  );
}

export default App

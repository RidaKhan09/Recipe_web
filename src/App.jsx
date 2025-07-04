import { useState } from 'react'
import './App.css'
import { Loadingscreen } from './components/LoadingScren'
import Navbar from './components/Navbar/Navbar'
import Homepage from './Pages/Home/homepage'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}
      <div >
      <Navbar/>
      <Homepage/>
      </div>
    </>
  );
}

export default App

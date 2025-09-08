import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import SplashScreen from "./components/splash-screen/SplashScreen";
import Home from "./components/home/Home";

const SPLASH_MS = 2500;
const TRANSITION_MS = 500;

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showHome, setShowHome] = useState(false);


  useEffect(() => {
    const unmountSplash = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_MS);

    const mountHome = setTimeout(() => {
      setShowHome(true);
    }, SPLASH_MS);

    return () => {
      clearTimeout(unmountSplash);
      clearTimeout(mountHome);
    };
  }, []);

  return (
    <div className="app">
      <Slide
        direction="right"
        in={showSplash}
        unmountOnExit
        timeout={{ exit: TRANSITION_MS }}
      >
        <div className="slide-container">
          <SplashScreen />
        </div>
      </Slide>
      {showHome && <Home />}
    </div>
  );
}

export default App;

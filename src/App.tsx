import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import SplashScreen from "./components/splash-screen/SplashScreen";
import { useNavigate } from "react-router";

const SPLASH_MS = 2700;
const TRANSITION_MS = 500;

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    const unmountSplash = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_MS);

    const mountHome = setTimeout(() => {
      navigate("/home");
    }, SPLASH_MS + TRANSITION_MS);

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
    </div>
  );
}

export default App;

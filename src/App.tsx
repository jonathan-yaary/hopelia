import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import SplashScreen from "./components/splash-screen/SplashScreen";
import Home from "./components/home/Home";

const TRANSITION_MS = 500;

const imagesToPreload = [
  "/cocktails.png",
  "/logo.png",
  "/pic.png",
  "/shots.png"
];

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === imagesToPreload.length) {
        setImagesLoaded(true);
      }
    };

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // count errors too
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 500);

    const homeTimeout = setTimeout(() => {
      setShowHome(true);
    }, 500 + TRANSITION_MS);

    return () => {
      clearTimeout(splashTimeout);
      clearTimeout(homeTimeout);
    };
  }, [imagesLoaded]);

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

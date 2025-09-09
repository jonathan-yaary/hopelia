import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import SplashScreen from "./components/splash-screen/SplashScreen";
import Home from "./components/home/Home";

const TRANSITION_MS = 500;
const MIN_SPLASH_DURATION = 2000;

const imagesToPreload = [
  "/cocktails.png",
  "/logo.png",
  "/pic.png",
  "/shots.png",
];

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [splashStartTime, setSplashStartTime] = useState(Date.now());
  const [showSplash, setShowSplash] = useState(true);
  const showHome = !showSplash;

  useEffect(() => {
    setSplashStartTime(Date.now());

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

    const elapsed = Date.now() - splashStartTime;
    const remaining = Math.max(MIN_SPLASH_DURATION - elapsed, 0);

    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, remaining);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, [imagesLoaded, splashStartTime]);

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

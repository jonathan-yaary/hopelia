import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";
import "./splash-screen.css";

const SplashScreen = () => {
  return (
    <Stack
      className="splash-screen"
      justifyContent="center"
      alignItems="center"
    >
      <Fade in={true} timeout={1500}>
        <div className="circle">
          <Fade in={true} timeout={1500} style={{ transitionDelay: "400ms" }}>
            <img src="logo.png" alt="Logo" />
          </Fade>

          <Fade in={true} timeout={1500} style={{ transitionDelay: "800ms" }}>
            <h1 className="splash-screen-title">החופ"לייה</h1>
          </Fade>
        </div>
      </Fade>
    </Stack>
  );
};

export default SplashScreen;

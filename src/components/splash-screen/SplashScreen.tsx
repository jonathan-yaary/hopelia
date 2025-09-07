import Stack from "@mui/material/Stack";
import Fade from "@mui/material/Fade";
import "./splash-screen.css";

const SplashScreen = () => {
  return (
    <Stack
      className="splash-screen"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <Fade in={true} timeout={1500}>
        <img src="/logo.png" alt="Logo"  />
      </Fade>

      <Fade in={true} timeout={1500} style={{ transitionDelay: '500ms' }}>
        <h1>החופ"לייה</h1>
      </Fade>
    </Stack>
  );
};

export default SplashScreen;

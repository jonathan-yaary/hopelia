import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import "./home.css";
import Cocktails from "../cocktails/Cocktails";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";

const Home = () => {
  const [showCocktails, setShowCocktails] = useState(false);
  const [showShots, setShowShots] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);

  const buttons = [
    {
      key: "cocktails",
      title: "קוקטיילים",
      onClick: () => setShowCocktails(true),
    },
    { key: "shots", title: "שוטים מיוחדים", onClick: () => setShowShots(true) },
    { key: "recipes", title: "למקצוענים", onClick: () => setShowRecipes(true) },
  ];

  const isInSubPage = showCocktails || showShots || showRecipes;

  return (
    <>
      <Stack
        className="home"
        alignItems="center"
        spacing={5}
        style={{
          display: isInSubPage ? "none" : undefined,
        }}
      >
        <Slide direction="left" in timeout={600}>
          <img className="bar-picture" src="pic.png" alt="" />
        </Slide>

        <Stack gap="2rem">
          {buttons.map(({ key, title, onClick }, index) => (
            <Slide
              key={key}
              direction="left"
              in
              timeout={600}
              style={{ transitionDelay: `${(index + 1) * 300}ms` }}
            >
              <Button
                className="button-link"
                variant="outlined"
                onClick={onClick}
              >
                {title}
              </Button>
            </Slide>
          ))}
        </Stack>
      </Stack>

      <Stack
        className="sub-page"
        style={{
          display: !isInSubPage ? "none" : undefined,
        }}
      >
        <IconButton
          className="back-button"
          onClick={() => {
            if (showCocktails) setShowCocktails(false);
            if (showShots) setShowShots(false);
            if (showRecipes) setShowRecipes(false);
          }}
        >
          <ArrowBackIcon className="back-button-icon" />
        </IconButton>

        {showCocktails && <Cocktails />}
      </Stack>
    </>
  );
};

export default Home;

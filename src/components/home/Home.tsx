import { useState, useEffect, useRef } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ButtonBase, IconButton } from "@mui/material";
import Fade from "@mui/material/Fade";

import Cocktails from "../cocktails/Cocktails";
const Shots = () => <div style={{ padding: "2rem" }}>Shots content here</div>;
const Recipes = () => (
  <div style={{ padding: "2rem" }}>Recipes content here</div>
);

import "./home.css";

const Home = () => {
  const [showCocktails, setShowCocktails] = useState(false);
  const [showShots, setShowShots] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  const subPageRef = useRef<HTMLDivElement | null>(null);

  const isSubPageRendered = showCocktails || showShots || showRecipes;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 250;
      setShowBackButton(scrolled && isSubPageRendered);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSubPageRendered]);

  function closeAllSections() {
    if (showCocktails) setShowCocktails(false);
    if (showShots) setShowShots(false);
    if (showRecipes) setShowRecipes(false);
  }

  const handleOpenSection = (openSection: () => void) => {
    closeAllSections();
    openSection();

    setTimeout(() => {
      subPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const buttons = [
    {
      key: "cocktails",
      title: "קוקטיילים",
      onClick: () =>
        handleOpenSection(() => {
          setShowCocktails(true);
        }),
    },
    {
      key: "shots",
      title: "שוטים מיוחדים",
      onClick: () =>
        handleOpenSection(() => {
          setShowShots(true);
        }),
    },
    {
      key: "recipes",
      title: "למקצוענים",
      onClick: () =>
        handleOpenSection(() => {
          setShowRecipes(true);
        }),
    },
  ];

  return (
    <>
      <Stack className="home" alignItems="center" spacing={5}>
        <Slide direction="left" in timeout={600}>
          <img className="bar-picture" src="pic.png" alt="Bar" />
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

      <Stack className="sub-page" ref={subPageRef}>
        <Fade in={showBackButton} timeout={500}>
          <IconButton
            className="back-button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <ArrowUpwardIcon className="back-button-icon" />
          </IconButton>
        </Fade>

        {showCocktails && <Cocktails />}
        {showShots && <Shots />}
        {showRecipes && <Recipes />}
      </Stack>
    </>
  );
};

export default Home;

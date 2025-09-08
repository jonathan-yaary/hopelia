import { useState, useEffect, useRef } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

import Menu from "../menu/Menu";

import { cocktails, shots, recipes } from "../../data";

import "./home.css";

const Home = () => {
  const [activeSection, setActiveSection] = useState<
    "cocktails" | "shots" | "recipes"
  >("cocktails");
  const [showBackButton, setShowBackButton] = useState(false);

  const subPageRef = useRef<HTMLDivElement | null>(null);

  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 350;
      setShowBackButton(scrolled && activeSection !== null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleOpenSection = (section: typeof activeSection) => {
    setActiveSection(section);
    
    isFirstRender.current = false;
    
    setTimeout(() => {
      subPageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const buttons = [
    { key: "cocktails", title: "קוקטיילים", data: cocktails },
    { key: "shots", title: "שוטים מיוחדים", data: shots },
    { key: "recipes", title: "למקצוענים", data: recipes },
  ] as const;

  return (
    <>
      <Slide direction="left" in timeout={600}>
        <img className="bar-picture" src="pic.png" alt="Bar" />
      </Slide>

      <Stack
        className="categories"
        direction="row"
        justifyContent="space-evenly"
      >
        {buttons.map(
          ({ key }, index) =>
            key !== "recipes" && (
              <Slide
                key={key}
                direction="left"
                in
                timeout={500}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <Button
                  className={
                    "image-button " + (key === activeSection ? "active" : "")
                  }
                  onClick={() => handleOpenSection(key)}
                >
                  <img src={key + ".png"} alt="" />
                </Button>
              </Slide>
            )
        )}
      </Stack>

      <Stack className="sub-page">
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

        {activeSection === "cocktails" && (
          <Menu items={cocktails} slide={isFirstRender.current} slideTimeout={300} />
        )}
        {activeSection === "shots" && <Menu items={shots} />}
        {activeSection === "recipes" && <Menu items={recipes} />}
      </Stack>
    </>
  );
};

export default Home;

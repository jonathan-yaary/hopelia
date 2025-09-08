import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import MenuItem from "../menu-item/MenuItem";
import Slide from "@mui/material/Slide";

import "./menu.css";

const Menu = (props: {
  items: {
    name: string;
    description: string[];
  }[];
  slide?: boolean;
  slideTimeout?: number;
}) => {
  const { items, slide = false, slideTimeout = 0 } = props;

  const [show, setShow] = useState(!slide);

  useEffect(() => {
    if (slide) {
      const timer = setTimeout(() => {
        setShow(true);
      }, slideTimeout);
      return () => clearTimeout(timer);
    }
  }, [slide, slideTimeout]);

  return (
    <Stack className="menu">
        {items.map(({ name, description }, index) => (
          <Slide
            key={name}
            direction="left"
            in={show}
            timeout={slide ? 500 : 0}
            style={{ transitionDelay: `${(index - 1) * 150}ms` }}
          >
            <div>
              <MenuItem name={name} description={description} />
            </div>
          </Slide>
        ))}
    </Stack>
  );
};

export default Menu;

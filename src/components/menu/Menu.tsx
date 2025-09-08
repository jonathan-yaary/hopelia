import Stack from "@mui/material/Stack";
import MenuItem from "../menu-item/MenuItem";

import "./menu.css";

const Menu = (props: {
  items: {
    name: string;
    description: string[];
  }[];
}) => {
  const { items } = props;

  return (
    <Stack className="menu">
      <Stack gap="2rem">
        {items.map(({ name, description }) => (
          <MenuItem key={name} name={name} description={description} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Menu;

import Stack from "@mui/material/Stack";

import "./menu-item.css";

const MenuItem = (props: { name: string; description: string[] }) => {
  const { name, description } = props;

  return (
    <Stack className="menu-item">
      <p className="title">{name}</p>
      <div className="description">
        {description.map((s) => (
          <p>{s}</p>
        ))}
      </div>
    </Stack>
  );
};

export default MenuItem;
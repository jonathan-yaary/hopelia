import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./home.css";
import { useNavigate } from "react-router";

const buttons = [
  { title: "קוקטיילים", to: "cocktails" },
  { title: "שוטים מיוחדים", to: "shots" },
  { title: "למקצוענים", to: "recepies" },
];

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <Stack className="home">
      <img src="pic.png" alt="" />
      <Stack gap="2rem">
        {buttons.map(({ title, to }) => (
          <Button className="button-link" variant="outlined" onClick={() => navigate(import.meta.env.BASE_URL + to)}>
            {title}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};

export default Home;

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./home.css"

const Home = () => {
    const buttons = [{title: "קוקטיילים"}, {title: "שוטים מיוחדים"}, {title: "למקצוענים"}];

  return (
    <Stack className="home">
        {buttons.map(({title})=>(
            <Button className="button-link" variant="outlined">{title}</Button>
        ))}
    </Stack>
  );
};

export default Home;

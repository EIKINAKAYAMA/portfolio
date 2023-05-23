import { Button, Typography } from "@mui/material";
import { Link } from "react-scroll";

const ScrollButton = ({ to, title }) => (
  <Button variant="outlined">
    <Link to={to} smooth={true} offset={-50} duration={500} delay={500}>
      <Typography color="#00FF00">{title}</Typography>
    </Link>
  </Button>
);

export default ScrollButton;

import { Box, CardActionArea, CardActions, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { GithubIcon } from "../../lib/icons";

export default function ImageCard({ src, title, description, href }) {
  return (
    <Card sx={{ maxWidth: 300, margin: "auto" }}>
      <CardActionArea>
        <Link href={href} passHref>
          <CardMedia component="img" image={src} alt="green iguana" />
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              align="left"
            >
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <IconButton href="#">
            <GithubIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

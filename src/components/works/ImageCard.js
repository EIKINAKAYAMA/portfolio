import { Box, CardActionArea, CardActions, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { GithubIcon } from "../../lib/icons";

export default function ImageCard({
  image,
  title,
  skill,
  description,
  pageLink,
  gitLink,
}) {
  return (
    <Card sx={{ maxWidth: 300, margin: "auto" }}>
      <CardActionArea disabled={pageLink ? false : true}>
        <Link href={pageLink} passHref>
          <CardMedia
            component="img"
            image={image}
            style={{ width: "300px", height: "200px" }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              align="left"
            >
              {title}
            </Typography>
            <Typography
              sx={{ my: 1 }}
              variant="body2"
              color="text.secondary"
              align="left"
            >
              {skill}
            </Typography>
            <div style={{ height: "2em", overflow: "hidden" }}>
              <Typography
                variant="body2"
                color="text.secondary"
                align="left"
                style={{ lineHeight: "1em" }}
              >
                {description}
              </Typography>
            </div>
          </CardContent>
        </Link>
      </CardActionArea>
      {gitLink && (
        <CardActions>
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <IconButton href={gitLink}>
              <GithubIcon />
            </IconButton>
          </Box>
        </CardActions>
      )}
    </Card>
  );
}

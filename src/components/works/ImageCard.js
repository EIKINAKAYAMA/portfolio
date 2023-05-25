import { Box, CardActionArea, CardActions, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GithubIcon, OutlineLink } from "../../lib/icons";

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
      <CardActionArea disabled>
        <CardMedia
          component="img"
          image={image}
          style={{ width: "300px", height: "200px" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            fontWeight="bold"
            color="#00FF00"
            component="div"
            align="left"
          >
            {title}
          </Typography>
          <div style={{ height: "4em", overflow: "hidden" }}>
            <Typography
              sx={{ my: 1, lineHeight: "1em" }}
              variant="body2"
              color="#00FF00"
              align="left"
            >
              {skill}
            </Typography>
          </div>
          <div style={{ height: "3em", overflow: "hidden" }}>
            <Typography
              variant="body2"
              color="#00FF00"
              align="left"
              style={{ lineHeight: "1em" }}
            >
              {description}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "40px",
          }}
        >
          {gitLink && (
            <IconButton href={gitLink}>
              <GithubIcon />
            </IconButton>
          )}
          {pageLink && (
            <IconButton href={pageLink}>
              <OutlineLink />
            </IconButton>
          )}
        </Box>
      </CardActions>
    </Card>
  );
}

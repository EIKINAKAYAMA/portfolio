import { Rating, Box, Typography } from "@mui/material";

export default function SkillLevel(props) {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body2"
        color="#00FF00"
        sx={{ mx: 3, width: "50%", textAlign: "right" }}
      >
        {props.skillName}
      </Typography>
      <Box
        sx={{
          mx: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          width: "50%",
        }}
      >
        <Rating value={props.skillLevel} readOnly />
      </Box>
    </Box>
  );
}

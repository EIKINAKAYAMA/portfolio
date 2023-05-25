import { Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export default function Top() {
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Typography color="#00FF00">
        <TypeAnimation
          sequence={[
            1000,
            "お！",
            2000, // Waits 1s
            "見つけていただき、ありがとうございます！",
            2000, // Waits 2s
            "ぜひ、ご覧ください。",
            () => {
              console.log("Sequence completed"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={false}
          style={{
            fontSize: "2em",
            display: "inline-block",
            marginRight: 20,
            marginLeft: 20,
          }}
        />
      </Typography>
    </Grid>
  );
}

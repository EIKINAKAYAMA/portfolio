import { Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      // ref={myRef}
    >
      <Typography color="textPrimary">Deploy OR DIE</Typography>
    </Grid>
  );
}

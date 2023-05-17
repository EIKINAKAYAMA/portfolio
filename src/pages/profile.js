import ProfileTimeline from "@/components/profile/ProfileTimeline";
import { Avatar, Box, Grid, Typography, useMediaQuery } from "@mui/material";

const calculateAge = (birthday) => {
  const birthDate = new Date(birthday);
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDiff = now.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && now.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export default function Profile() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        my: "10vh",
      }}
    >
      <Typography variant="h2" color="textPrimary" align="center">
        profile
      </Typography>
      <Grid container spacing={2} alignItems="center" sx={{ my: "10vh" }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: isSmallScreen ? "center" : "flex-end",
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="/img/profile.png"
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" color="textPrimary">
            中山英奇
          </Typography>
          <Typography variant="body1" color="textPrimary">
            {calculateAge("1994-11-01")}歳
          </Typography>
          <Typography variant="body1" color="textPrimary">
            フルスタックエンジニア/コンサルタント
          </Typography>
        </Grid>
      </Grid>
      <ProfileTimeline />
    </Box>
  );
}

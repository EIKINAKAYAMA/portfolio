import ProfileTimeline from "@/components/profile/ProfileTimeline";
import {
  Avatar,
  Box,
  Grid,
  Typography,
  useMediaQuery,
  Divider,
} from "@mui/material";

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
            フルスタックエンジニア
          </Typography>
          <Typography variant="caption" color="textPrimary">
            先端技術を取り入れ、マイクロ化していくサービスを、
            <br />
            高速・安定・低コストに、ローンチする手伝いをしています。
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h3" color="textPrimary" align="center">
        来歴
      </Typography>
      <Divider sx={{ my: "20px" }} />
      <ProfileTimeline />
      <Divider sx={{ my: "50px" }} />
      <Typography
        sx={{ my: "50px" }}
        variant="h4"
        color="textPrimary"
        align="center"
      >
        ご相談・案件お待ちしています。
        <Typography
          sx={{ my: "20px" }}
          variant="body1"
          color="textPrimary"
          align="center"
        >
          【エンジニアを探している方】
          <br />
          私が得意としない領域でも、優秀な仲間をご紹介させていただきます。
          <br />
          ぜひ、一度ご相談ください。
        </Typography>
        <Typography
          sx={{ my: "10" }}
          variant="body1"
          color="textPrimary"
          align="center"
        >
          【ビジネス課題・技術課題を抱えている方】
          <br />
          課題ベース構いません、どう解決していくか一緒に進められればと思います。
          <br />
          ぜひ、教えてください。
        </Typography>
      </Typography>
    </Box>
  );
}

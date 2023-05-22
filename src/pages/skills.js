import { Box, Grid, Typography } from "@mui/material";
import SkillLevel from "@/components/skills/SkillLevel";

export default function Skills() {
  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        my: "10vh",
      }}
    >
      <Typography variant="h2" color="textPrimary" align="center">
        Skills
      </Typography>

      <Typography
        sx={{ my: 3 }}
        variant="body2"
        color="textPrimary"
        align="center"
      >
        代表的なものを記載しています。
      </Typography>

      <Grid container spacing={2} minHeight="60vh" alignItems="flex-start">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ my: "20px", position: "relative", top: 0 }}
        >
          <Typography variant="h6" color="textPrimary" align="center">
            開発言語
          </Typography>
          <SkillLevel skillName="TypeScript" skillLevel={4} />
          <SkillLevel skillName="JavaScript" skillLevel={4} />
          <SkillLevel skillName="HTML/CSS" skillLevel={4} />
          <SkillLevel skillName="PHP" skillLevel={4} />
          <SkillLevel skillName="Python" skillLevel={3} />
          <SkillLevel skillName="Ruby" skillLevel={3} />
          <SkillLevel skillName="Java" skillLevel={2} />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ my: "20px" }}>
          <Typography variant="h6" color="textPrimary" align="center">
            フレームワーク
          </Typography>
          <SkillLevel skillName="Next" skillLevel={4} />
          <SkillLevel skillName="React" skillLevel={4} />
          <SkillLevel skillName="Vue" skillLevel={4} />
          <SkillLevel skillName="Laravel" skillLevel={4} />
          <SkillLevel skillName="Django" skillLevel={3} />
          <SkillLevel skillName="ROR" skillLevel={3} />
          <SkillLevel skillName="Spring" skillLevel={2} />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ my: "20px" }}>
          <Typography variant="h6" color="textPrimary" align="center">
            インフラ系
          </Typography>
          <SkillLevel skillName="AWS" skillLevel={4} />
          <SkillLevel skillName="GCP" skillLevel={2} />
          <SkillLevel skillName="Node.js" skillLevel={4} />
          <SkillLevel skillName="Docker" skillLevel={4} />
          <SkillLevel skillName="Kubernetes" skillLevel={2} />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ my: "20px" }}>
          <Typography variant="h6" color="textPrimary" align="center">
            その他
          </Typography>
          <SkillLevel skillName="Git" skillLevel={4} />
          <SkillLevel skillName="Jenkins" skillLevel={4} />
          <SkillLevel skillName="cypress" skillLevel={4} />
          <SkillLevel skillName="ChatGPT" skillLevel={4} />
        </Grid>
      </Grid>
    </Box>
  );
}

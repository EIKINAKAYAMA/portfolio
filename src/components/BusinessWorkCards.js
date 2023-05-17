import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ImageCard from "../components/common/ImageCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="subtitle1" color="textPrimary" align="center">
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function IndividualWorkCards() {
  return (
    <Grid container spacing={4}>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          src="/img/works-sample-thumb.jpg"
          title="test"
          description="test"
          href="https://hodalab.com/portfolio/"
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          src="/img/works-sample-thumb.jpg"
          title="test"
          description="test"
          href="https://hodalab.com/portfolio/"
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          src="/img/works-sample-thumb.jpg"
          title="test"
          description="test"
          href="https://hodalab.com/portfolio/"
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          src="/img/works-sample-thumb.jpg"
          title="test"
          description="test"
          href="https://hodalab.com/portfolio/"
        />
      </Grid>
    </Grid>
  );
}
export default IndividualWorkCards;

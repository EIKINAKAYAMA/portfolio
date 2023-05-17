import Grid from "@mui/material/Unstable_Grid2";
import ImageCard from "../components/common/ImageCard";

export default function BusinessWorkCards() {
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

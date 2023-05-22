import Grid from "@mui/material/Unstable_Grid2";
import ImageCard from "./ImageCard";

export default function HabitCards() {
  return (
    <Grid container spacing={4}>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/tetris.png"
          title="ポートフォリオ（WEBアプリ）"
          skill="Next"
          description="このポートフォリオ"
          pageLink="https://eikinakayama.github.io/portfolio/"
          gitLink="https://github.com/EIKINAKAYAMA/portfolio"
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/tetris.png"
          title="テトリス（WEBアプリ）"
          skill="React"
          description="テトリスのロジックを改造、難易度を上げたテトリス"
          pageLink="https://eikinakayama.github.io/tetris/"
          gitLink="https://github.com/EIKINAKAYAMA/tetris"
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/practice_react.png"
          title="四目並べ（WEBアプリ）"
          skill="React"
          description="改変した四目並べ（Reactチュートリアル応用）"
          pageLink="https://eikinakayama.github.io/practice_react/"
          gitLink="https://github.com/EIKINAKAYAMA/practice_react"
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/original-port-scanner.png"
          title="ポートスキャナー（ツール）"
          skill="Python"
          description="指定IPの解放ポートを検索、接続するスキャナ。"
          pageLink=""
          gitLink="https://github.com/EIKINAKAYAMA/original-port-scanner"
        />
      </Grid>
    </Grid>
  );
}

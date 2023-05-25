import Grid from "@mui/material/Unstable_Grid2";
import ImageCard from "./ImageCard";

export default function BusinessCards() {
  return (
    <Grid container spacing={4}>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/openpage.png"
          title="CMS開発（WEBアプリ）"
          skill="JavaScript(Vue), PHP(Laravel), Docker, AWS(Terraform), Github Actions, MySQL"
          description="AI音声認証・文字起こしなど、フロントエンド・バックエンド機能を開発"
          pageLink="https://openpage.co.jp/"
          gitLink=""
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/trideal.png"
          title="API開発（モバイルアプリ）"
          skill="TypeScript, AWS(CDK), React Native, DynamoDB"
          description="旅行アプリのバックエンド・APIを開発"
          pageLink="https://trideal.net/ramble"
          gitLink=""
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/primaji.png"
          title="API開発（組込アプリ）"
          skill="TypeScript, AWS(CDK)"
          description="オリジナルTシャツ作成用、画像変換APIを開発"
          pageLink=""
          gitLink=""
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/laravel-admin.png"
          title="管理画面開発（WEBアプリ）"
          skill="PHP(Laravel), Docker, MySQL"
          description="管理画面のフロント・バックエンド機能を開発"
          pageLink=""
          gitLink=""
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/s-p-com.png"
          title="見積管理システム開発（WEBアプリ）"
          skill="Typescript(Next), PlanetScale, Github Actions, Cypress"
          description="管理画面のフロント・バックエンド機能を開発"
          pageLink=""
          gitLink=""
        />
      </Grid>
    </Grid>
  );
}

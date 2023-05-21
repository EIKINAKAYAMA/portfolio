import Grid from "@mui/material/Unstable_Grid2";
import ImageCard from "./ImageCard";

export default function BusinessCards() {
  return (
    <Grid container spacing={4}>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/openpage.png"
          title="CMS開発（WEBアプリ）"
          skill="Vue, Laravel, Docker, AWS"
          description="AI音声認証・文字起こしなどの、フロントエンド・バックエンド機能の開発"
          pageLink="https://openpage.co.jp/"
          gitLink=""
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/trideal.png"
          title="API開発（モバイルアプリ）"
          skill="TypeScript, AWS, React Native"
          description="旅行アプリのバックエンド・API開発"
          pageLink="https://trideal.net/ramble"
          gitLink=""
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/primaji.png"
          title="API開発（組込アプリ）"
          skill="TypeScript, AWS"
          description="オリジナルTシャツ作成に伴う画像変換API開発"
          pageLink=""
          gitLink=""
        />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <ImageCard
          image="/img/laravel-admin.png"
          title="管理画面開発（WEBアプリ）"
          skill="Laravel, Docker"
          description="オリジナルTシャツ作成に伴う画像変換API開発"
          pageLink=""
          gitLink=""
        />
      </Grid>
    </Grid>
  );
}

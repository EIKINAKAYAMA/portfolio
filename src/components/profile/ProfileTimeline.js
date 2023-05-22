import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import RightTimelineContent from "./RightTimelineContent";
import LeftTimelineContent from "./LeftTimelineContent";

export default function ProfileTimeline() {
  return (
    <>
      <LeftTimelineContent date="2017/03" text="東京理科大学 卒業" />
      <LeftTimelineContent date="2017/05" text="基幹システム導入・保守リード" />
      <RightTimelineContent date="2019/04" text="オーストラリア留学" />
      <RightTimelineContent date="2020/01" text="帰国" />
      <LeftTimelineContent date="2020/02" text="国家試験システム化リード" />
      <LeftTimelineContent
        date="2021/01"
        text="スポーツ公式サイト技術選定サポート"
      />
      <RightTimelineContent date="2021/08" text="フリーランス活動の本格化" />
      <LeftTimelineContent
        date="2021/09"
        text="大手通信会社のCI/CD基盤構築リード"
      />
      <RightTimelineContent date="2022/11" text="組織開発案件の受注開始" />
      <RightTimelineContent date="2023/05" text="Navitexを創業" />
    </>
  );
}

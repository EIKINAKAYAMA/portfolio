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

export default function RightTimelineContent(props) {
  const text = props.text.replace(/\\n/g, "\n"); // 改行文字を実際の改行に置換する

  return (
    <Timeline sx={{ margin: 0, padding: 0 }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector style={{ backgroundColor: "#00FF00" }} />
          <TimelineDot style={{ backgroundColor: "#00FF00" }} />
          <TimelineConnector style={{ backgroundColor: "#00FF00" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" color="#00FF00">
            {props.date}
          </Typography>
          <Typography color="#00FF00">{props.text}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

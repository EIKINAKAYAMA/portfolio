import { Grid, Typography, Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { useState } from "react";

export default function Top() {
  const [processingComplete, setProcessingComplete] = useState(false);
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Typography color="#00FF00">
        <TypeAnimation
          sequence={[
            1000,
            "お！",
            2000,
            "見つけていただき、ありがとうございます！",
            2000,
            "ぜひ、ご覧ください。",
            1500,
            () => {
              setProcessingComplete(true);
              console.log("Sequence completed"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={false}
          style={{
            fontSize: "2em",
            display: "inline-block",
            marginRight: 20,
            marginLeft: 20,
          }}
        />
      </Typography>
      {processingComplete && (
        <div style={{ cursor: "pointer" }}>
          <Link
            to="works"
            smooth={true}
            offset={-50}
            duration={500}
            delay={500}
          >
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </Link>
        </div>
      )}
    </Grid>
  );
}

import { Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.clouds.min";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x0,
          cloudColor: 0xa0c7f2,
          cloudShadowColor: 0x0,
          sunColor: 0x0,
          sunGlareColor: 0x0,
          sunlightColor: 0x0,
          speed: 0.7,
          THREE: THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      ref={myRef}
    >
      <Typography color="textPrimary">Deploy OR DIE</Typography>
    </Grid>
  );
}

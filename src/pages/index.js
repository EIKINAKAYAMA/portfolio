import { Grid } from "@mui/material";
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
    // <main className="content">
    //   {/* skill */}
    //   <section className="skill section" id="skill">
    //     <div className="inner">
    //       <h2 className="title">Skill</h2>
    //       <div className="skill-list">
    //         <div className="skill-item">
    //           <p className="skill-img">
    //             <img src="img/icon_skill.png" alt="" />
    //           </p>
    //           <div className="skill-body">
    //             <h3 className="skill-name">HTML5/CSS3</h3>
    //             <p className="skill-text">
    //               テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //             </p>
    //           </div>
    //         </div>
    //         <div className="skill-item">
    //           <p className="skill-img">
    //             <img src="img/icon_skill.png" alt="" />
    //           </p>
    //           <div className="skill-body">
    //             <h3 className="skill-name">WordPress</h3>
    //             <p className="skill-text">
    //               テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //             </p>
    //           </div>
    //         </div>
    //         <div className="skill-item">
    //           <p className="skill-img">
    //             <img src="img/icon_skill.png" alt="" />
    //           </p>
    //           <div className="skill-body">
    //             <h3 className="skill-name">JavaScript</h3>
    //             <p className="skill-text">
    //               テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //             </p>
    //           </div>
    //         </div>
    //         <div className="skill-item">
    //           <p className="skill-img">
    //             <img src="img/icon_skill.png" alt="" />
    //           </p>
    //           <div className="skill-body">
    //             <h3 className="skill-name">Photoshop</h3>
    //             <p className="skill-text">
    //               テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //             </p>
    //           </div>
    //         </div>
    //         <div className="skill-item">
    //           <p className="skill-img">
    //             <img src="img/icon_skill.png" alt="" />
    //           </p>
    //           <div className="skill-body">
    //             <h3 className="skill-name">Illustrator</h3>
    //             <p className="skill-text">
    //               テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //             </p>
    //           </div>
    //         </div>
    //         <div className="skill-item">
    //           <p className="skill-img">
    //             <img src="img/icon_skill.png" alt="" />
    //           </p>
    //           <div className="skill-body">
    //             <h3 className="skill-name">XD</h3>
    //             <p className="skill-text">
    //               テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </main>
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      ref={myRef}
    >
      <h1>Curiosity-driven problem-solving</h1>
      {/* <Stack direction="row" columnGap={1}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack> */}
    </Grid>
  );
}

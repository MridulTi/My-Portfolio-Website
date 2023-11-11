import React,{useCallback} from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import WD from "../assets/logo/WebDeveloper.png"

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={
        {
            particles: {
              number: {
                value: 3,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: "#e4caa9"
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0.5,
                  color: "#ff8960"
                },
                polygon: {
                  nb_sides: 6
                },
                image: {
                  src: WD,
                  width: 150,
                //   height: 10
                }
              },
              opacity: {
                value: 0.3,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 80,
                random: false,
                anim: {
                  enable: true,
                  speed: 10,
                  size_min: 40,
                  sync: false
                }
              },
              line_linked: {
                enable: false,
                distance: 200,
                color: "#ffffff",
                opacity: 1,
                width: 3
              },
              move: {
                enable: true,
                speed: 8,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "grab"
                },
                onclick: {
                  enable: false,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}/>
  )
}

export default ParticleBackground
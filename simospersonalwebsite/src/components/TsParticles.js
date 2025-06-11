// ParticleBackground.jsx
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // ✅ Full feature set
import './css/TsParticles.css';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // ✅ Load everything, including triangles
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false},
        // background: { color: "#e1e6ed" },
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: "bounce",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#3f5175",
            opacity: 0.3,
            width: 1,
            triangles: {
              enable: true,
              color: "#bec1c4s",
              opacity: 0.01,
            },
          },
        },
        detectRetina: true,
      }}
       style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1000,
      }}
    />
  );
}

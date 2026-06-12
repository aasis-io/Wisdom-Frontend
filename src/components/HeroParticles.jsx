import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function HeroParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="w-full h-full"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: { value: 75 },
          color: { value: "#1e2a4a" },
          links: {
            enable: true,
            color: "#1e2a4a",
            distance: 120,
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 0.8 },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: {
            onHover: { enable: false, mode: ["grab", "bubble"] },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

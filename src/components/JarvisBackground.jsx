
import "./JarvisBackground.css";

function JarvisBackground() {
  return (
    <div className="jarvis-background">
      <div className="hud-grid"></div>

      <div className="hud-center">
        <div className="hud-ring outer-ring"></div>
        <div className="hud-ring middle-ring"></div>
        <div className="hud-ring inner-ring"></div>
        <div className="hud-ring segmented-ring"></div>

        <div className="hud-crosshair horizontal"></div>
        <div className="hud-crosshair vertical"></div>

        <div className="hud-core">
          <div className="core-light"></div>
        </div>

        <div className="hud-radar"></div>
      </div>

      <div className="hud-corner top-left"></div>
      <div className="hud-corner top-right"></div>
      <div className="hud-corner bottom-left"></div>
      <div className="hud-corner bottom-right"></div>


      <div className="hud-data data-right">
        <div className="hud-bars">
          {Array.from({ length: 12 }).map((_, i) => (
            <i key={i} style={{ animationDelay: `${i * 0.12}s` }}></i>
          ))}
        </div>
      </div>

     
      <div className="hud-particles">
        {Array.from({ length: 45 }).map((_, i) => (
          <i
            key={i}
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 8) * 0.5}s`,
            }}
          ></i>
        ))}
      </div>
    </div>
  );
}

export default JarvisBackground;

import { useEffect, useRef, useState } from "react";
import './App.css';
function App() {
  const lastPressTime = useRef(null);
  const intervals = useRef([]);
  const [bpm, setBPM] = useState(null);

  let lastEightDeltas = []

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code !== "Space") return;

      const now = performance.now();

      if (lastPressTime.current !== null) {
        const delta = now - lastPressTime.current;
        intervals.current.push(delta);

        if (delta > 2000) {
          lastEightDeltas = [];
          setBPM(0)
        } else {
          lastEightDeltas.unshift(delta)

          if (lastEightDeltas.length > 7) {
            lastEightDeltas.pop()
          }

          const average = array => array.reduce((a, b) => a + b) / array.length;
          setBPM(Math.round(60000/average(lastEightDeltas)))
        }
      }

      lastPressTime.current = now;
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="app">
      <h1>Tap Tempo</h1>
      <p>Press the space bar repeatedly.</p>

      {bpm ? (
        <div>
          <div>
            <strong>Average Time Between Presses:</strong>{" "}
            {bpm} BPM
          </div>
          <div>
            <strong>1/4 Note ms:</strong>{" "}
            {(60000/bpm).toFixed(2)}
          </div>
          <div>
            <strong>1/8 Note ms:</strong>{" "}
            {(30000/bpm).toFixed(2)}
          </div>
          <div>
            <strong>1/16 Note ms:</strong>{" "}
            {(15000/bpm).toFixed(2)}
          </div>
          <div>
            <strong>1/32 Note ms:</strong>{" "}
            {(7500/bpm).toFixed(2)}
          </div>
        </div>
      ) : (
        <p>Press space at least twice to calculate an average.</p>
      )}
    </div>
  );
}

export default App;

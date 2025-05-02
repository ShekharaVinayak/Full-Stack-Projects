import { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState("blue");

  return (
    <div>
      <button 
        onClick={() => setColor(color === "blue" ? "green" : "blue")}
        style={{ backgroundColor: color, color: "white", padding: "10px" }}
      >
        Change Color
      </button>
    </div>
  );
}

export default ColorChanger;
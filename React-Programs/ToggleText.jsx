import { useState } from 'react';

function ToggleText() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Text</button>
      {show && <p>This is visible text.</p>}
    </div>
  );
}

export default ToggleText;
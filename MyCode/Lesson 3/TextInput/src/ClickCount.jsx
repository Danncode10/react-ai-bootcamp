// ClickCount.jsx
import { useState } from "react";

function ClickCount() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click Count: {count}
    </button>
  );
}

export default ClickCount;
// This component maintains a count of how many times the button has been clicked.
// It uses the useState hook to manage the count state.
// Each time the button is clicked, the count is incremented by 1 and displayed on the button.
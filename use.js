


import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactDOM from "react-dom/client"
 function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []); // Run effect only once

  return <h1>Time: {timer}</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Timer></Timer>)

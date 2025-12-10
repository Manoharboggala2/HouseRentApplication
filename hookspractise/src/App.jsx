
import React, { useRef, useEffect } from "react";

export default function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus input on page load
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>Auto Focus Input</h1>
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </div>
  );
}



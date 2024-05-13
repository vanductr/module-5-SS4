import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Bạn đã Click {count} lần</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

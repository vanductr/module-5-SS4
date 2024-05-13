import React, { useState } from "react";

export default function CounText() {
  const [counText, setCounText] = useState(0);

  function handleCounText(e) {
    setCounText(e.target.value.length);
  }
  return (
    <div>
      <textarea onChange={handleCounText} name="" id=""></textarea>
      <h3>Số ký tự đã nhập: {counText}</h3>
    </div>
  );
}

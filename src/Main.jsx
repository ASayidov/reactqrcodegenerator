import React, { useEffect, useState } from "react";
import "./App.css";

function Main() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${""}x${""}&bgcolor=${bgColor}`
    );
  }, [word, bgColor]);

  return (
    <div>
      <h1>Salom</h1>
    </div>
  );
}

export default Main;

import React, { useState } from "react";
// import useStorage from "../hooks/useStorage";
import Progress from "./Progress";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const type = ["image/png", "image/jpeg"];

  const onChangeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && type.includes(selected.type)) {
      setFile(selected);
      setErr("");
    } else {
      setFile(null);
      setErr("Please select valid image(png,jpeg).");
    }
  };

 
  return (
    <div style={{ margin: "1rem" }}>
      <form>
        <input type="file" onChange={(e) => onChangeHandler(e)} />
      </form>
      {err && <div style={{ color: "red", margin: "1rem" }}>{err}</div>}
      {file && <Progress />}
    </div>
  );
}

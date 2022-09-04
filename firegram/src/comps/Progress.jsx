import React from "react";
import useStorage from "../hooks/useStorage";

export default function Progress({ file, setFile }) {
  const { progress, url, error } = useStorage(file);
  console.log(progress);
  return <div>Progress</div>;
}

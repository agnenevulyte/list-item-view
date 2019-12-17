import React from "react";
import { useParams } from "react-router-dom";

export default function ListItem() {
  let { fistname } = useParams();
  return <div>name: {fistname}</div>;
}

import React from "react";

export default function FilterError({ error }) {
  return (
    <div id="error">
      <div>An error occurred</div>
      <p>{error.message}</p>
    </div>
  );
}

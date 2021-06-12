import React from "react";

export default ({ codeSandbox }) => {
  if (!codeSandbox) {
    return "";
  }console.log(codeSandbox);
  return (
    <a href={"https://codesandbox.io/s/"+codeSandbox+"?fontsize=14&hidenavigation=1&theme=dark"}>
      <img
        alt="Edit rhwta-string"
        src="https://codesandbox.io/static/img/play-codesandbox.svg"
      />
    </a>
  );
};

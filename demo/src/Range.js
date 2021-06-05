import React from "react";
import Example from "./Example.js";

const Range = () => {
  return (
    <>
      <Example
        title="Array of Two Numbers (Range)"
        text="An array of exactly two numbers is treated as a range. Highlighting starts at the first character index (inclusive) and ends at the second character index (exclusive)."
        initialValue="apple watermelon banana orange mango"
        code={`highlight={[2, 6]]}`}
        highlight={[2, 6]}
      />
    </>
  );
};

export default Range;

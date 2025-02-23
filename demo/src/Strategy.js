import React from "react";
import { Example } from "./Example.js";

const code = `const getSmileyDayString = (text, callback) => {
  const dayStrings = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  // Do nothing if there is not a smiley.
  if (text.indexOf(":)") !== -1) {
    // The below code searches for every instance of today.
    const textLower = text.toLowerCase();
    const dayString = dayStrings[new Date().getDay()];
    let index;

    while ((index = textLower.indexOf(dayString, index)) !== -1) {
      callback(index, index + dayString.length);
      index += dayString.length;
    }
  }
};

const StrategyDemo(props) {
  ...
  return <HighlightWithinTextarea
    highlight={getSmileyDayString}
    ...
  />;
}`;

const getSmileyDayString = (text, callback) => {
  const dayStrings = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  if (text.indexOf(":)") !== -1) {
    const textLower = text.toLowerCase();
    const dayString = dayStrings[new Date().getDay()];
    let index;

    while ((index = textLower.indexOf(dayString, index)) !== -1) {
      callback(index, index + dayString.length);
      index += dayString.length;
    }
  }
};

let text = (
  <span>
    You can use a strategy for custom logic. It is very similar to the
    underlying <a href="https://draftjs.org/">Draft.js</a>{" "}
    <a href="https://draftjs.org/docs/advanced-topics-decorators/">
      compositeDecorator
    </a>{" "}
    strategy except that the strategy receives the entire string and not the
    underlying draftjs state.
  </span>
);

const Strategy = () => {
  return (
    <>
      <Example
        title="Strategy"
        text={text}
        initialValue="Sun Mon Tue Wed Thu Fri Sat :) <-- remove the smiley..."
        highlight={getSmileyDayString}
        code={code}
        codeSandbox="rhwta-strategy-y1965"
      />
    </>
  );
};

export { Strategy };

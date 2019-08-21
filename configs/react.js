"use strict";

// https://palantir.github.io/tslint/rules/

const ON = true;
const OFF = false;

module.exports = {
  extends: "tslint-react",
  rules: {
    // All
    "jsx-alignment": ON,
    "jsx-ban-elements": OFF,
    "jsx-ban-props": OFF,
    "jsx-boolean-value": ON,
    "jsx-curly-spacing": [ON, "never"],
    "jsx-equals-spacing": [ON, "never"],
    "jsx-key": ON,
    "jsx-no-bind": ON,
    "jsx-no-lambda": ON,
    "jsx-no-multiline-js": OFF,
    "jsx-no-string-ref": ON,
    "jsx-use-translation-function": OFF,
    "jsx-self-close": ON,
    "jsx-space-before-trailing-slash": ON,
    "jsx-wrap-multiline": ON
  }
};

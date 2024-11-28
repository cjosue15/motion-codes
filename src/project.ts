import { makeProject } from "@motion-canvas/core";
import { Code, LezerHighlighter } from "@motion-canvas/2d";
import { parser } from "@lezer/javascript";
import { gruvboxDark } from "@uiw/codemirror-theme-gruvbox-dark";

import example from "./scenes/angular-19/standalone?scene";

Code.defaultHighlighter = new LezerHighlighter(
  parser.configure({
    dialect: "jsx ts",
  }),
  (gruvboxDark as any)[1][2].value,
);

export default makeProject({
  scenes: [example],
});

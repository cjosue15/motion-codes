import { Code, makeScene2D, word } from "@motion-canvas/2d";
import { createRef, DEFAULT, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();

  view.add(
    <Code
      ref={code}
      fontSize={50}
      lineHeight={80}
      fontFamily={"JetBrains Mono, monospace"}
      code={`\
    effect(() => {
      this.isAdmin.set(false)
    }, { allowSignalWrites: true })`}
    />,
  );

  yield* waitFor(2);
  yield* code().selection(
    code().findFirstRange("{ allowSignalWrites: true }"),
    0.5,
  );

  yield* waitFor(2);
  yield* code().selection(DEFAULT, 0.5);
  yield* waitFor(3);
  yield* code().code.replace(word(2, 0), "    });", 0.5);
  yield* waitFor(2);
});

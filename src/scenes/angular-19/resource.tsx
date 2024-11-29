import { Code, lines, makeScene2D, word } from "@motion-canvas/2d";
import { createRef, DEFAULT, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();

  view.add(
    <Code
      ref={code}
      fontSize={40}
      lineHeight={60}
      fontFamily={"JetBrains Mono, monospace"}
      code={`\
    effect(() => {
      console.log(userResource.value());
      console.log(userResource.status());
      console.log(userResource.isLoading());
      console.log(userResource.error());
    });`}
    />,
  );
  //
  // // yield* waitFor(1);
  // yield* code().selection(lines(0), 0.1);
  // // yield* waitFor(1);
  // yield* code().selection(lines(2, 5), 0.1);
  // // yield* waitFor(1);
  // yield* code().selection(lines(7, 10), 0.1);
  // // yield* waitFor(1);
  // yield* code().selection(lines(8), 0.1);
  // // yield* waitFor(1);
  // yield* code().selection(lines(9), 0.1);
  // // yield* waitFor(1);
});

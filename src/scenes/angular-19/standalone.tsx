import { Code, lines, makeScene2D, word } from "@motion-canvas/2d";
import { createRef, DEFAULT, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();

  view.add(
    <Code
      ref={code}
      fontSize={50}
      lineHeight={70}
      fontFamily={"JetBrains Mono, monospace"}
      code={`\
@Component({
  selector: 'app-root',
  template: '',
})
export class ComponentWithModule {}

@NgModule({
  declarations: [ComponentWithModule],
})
export class Module {}
`}
    />,
  );

  yield* waitFor(2);
  yield* code().selection(lines(1), 0.5);
  yield* waitFor(4);
  yield* code().selection(DEFAULT, 0.5);
  yield* waitFor(2);
  yield* code().code.remove(lines(1), 0.5);
  yield* waitFor(2);
});

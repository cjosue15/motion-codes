import { Code, lines, makeScene2D, word } from "@motion-canvas/2d";
import { createRef, DEFAULT, waitFor } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const code = createRef<Code>();

  view.add(
    <Code
      ref={code}
      fontSize={40}
      fontFamily={"JetBrains Mono, monospace"}
      code={`\
    const fruits = signal(['Banana', 'Apple', 'Berry']);

    const selectedFruit = linkedSignal(() => fruits()[0]);

    console.log(selectedFruit());
    
    selectedFruit.set('Apple');
    
    console.log(selectedFruit());
    
    fruits.set(['Coconut', 'Blackberry', 'Mango']);
    
    console.log(selectedFruit());`}
    />,
  );

  yield* code().selection(lines(0));
  yield* waitFor(5);
  yield* code().selection(lines(2), 0.5);
  yield* waitFor(3);
  yield* code().selection(word(2, 39, 17), 0.5);
  yield* waitFor(17);
  yield* code().selection(DEFAULT, 0.5);
  yield* waitFor(2);
  yield* code().code.insert([4, 33], "  => 🍌", 0.5);
  yield* waitFor(8);
  yield* code().selection(lines(6), 0.5);
  yield* waitFor(2);
  yield* code().code.insert([8, 33], "  => 🍎", 0.5);
  yield* code().selection(lines(8), 0.5);
  yield* waitFor(5);
  yield* code().selection(lines(10), 0.5);
  yield* waitFor(3);
  yield* code().selection(lines(12), 0.5);
  yield* code().code.insert([12, 33], "  => 🥥", 0.5);
  yield* waitFor(10);
});

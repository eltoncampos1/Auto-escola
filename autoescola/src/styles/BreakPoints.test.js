import { breakAt, BreakPointSizes } from "./BreakPoints";

test.each([
  [BreakPointSizes.sm],
  [BreakPointSizes.md],
  [BreakPointSizes.lg],
  [BreakPointSizes.xl],
])("break at %ipx", (size) => {
  expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});

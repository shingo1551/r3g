import type { Components, JSX } from "../dist/types/components";

interface MyHello extends Components.MyHello, HTMLElement {}
export const MyHello: {
  prototype: MyHello;
  new (): MyHello;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

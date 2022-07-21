import type { Components, JSX } from "../dist/types/components";

interface MyName extends Components.MyName, HTMLElement {}
export const MyName: {
  prototype: MyName;
  new (): MyName;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

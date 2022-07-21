import type { Components, JSX } from "../dist/types/components";

interface AnsTodo extends Components.AnsTodo, HTMLElement {}
export const AnsTodo: {
  prototype: AnsTodo;
  new (): AnsTodo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

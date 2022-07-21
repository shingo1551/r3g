import type { Components, JSX } from "../dist/types/components";

interface MyLifecycle extends Components.MyLifecycle, HTMLElement {}
export const MyLifecycle: {
  prototype: MyLifecycle;
  new (): MyLifecycle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

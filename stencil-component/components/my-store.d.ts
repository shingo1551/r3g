import type { Components, JSX } from "../dist/types/components";

interface MyStore extends Components.MyStore, HTMLElement {}
export const MyStore: {
  prototype: MyStore;
  new (): MyStore;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

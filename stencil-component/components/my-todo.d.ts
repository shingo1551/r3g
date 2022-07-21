import type { Components, JSX } from "../dist/types/components";

interface MyTodo extends Components.MyTodo, HTMLElement {}
export const MyTodo: {
  prototype: MyTodo;
  new (): MyTodo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

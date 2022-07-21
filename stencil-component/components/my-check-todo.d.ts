import type { Components, JSX } from "../dist/types/components";

interface MyCheckTodo extends Components.MyCheckTodo, HTMLElement {}
export const MyCheckTodo: {
  prototype: MyCheckTodo;
  new (): MyCheckTodo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;

/* mycomp custom elements */
export { AnsTodo as AnsTodo } from '../dist/types/components/ans-todo/ans-todo';
export { MyCheckTodo as MyCheckTodo } from '../dist/types/components/my-check-todo/my-check-todo';
export { MyHello as MyHello } from '../dist/types/components/my-hello/my-hello';
export { MyLifecycle as MyLifecycle } from '../dist/types/components/my-lifecycle/my-lifecycle';
export { MyChild as MyName } from '../dist/types/components/my-name/my-name';
export { MyStore as MyStore } from '../dist/types/components/my-store/my-store';
export { MyTodo as MyTodo } from '../dist/types/components/my-todo/my-todo';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../dist/types';

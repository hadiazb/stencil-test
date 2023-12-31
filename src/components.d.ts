/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        "configCard": {
    name: string;
    color: string;
  };
        "dataCard": {
    name: string;
    color: string;
  };
    }
    interface SimpleComponent {
        "configCard": {
    name: string;
    color: string;
  };
        "dataCard": {
    name: string;
    color: string;
  };
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSimpleComponentElement extends Components.SimpleComponent, HTMLStencilElement {
    }
    var HTMLSimpleComponentElement: {
        prototype: HTMLSimpleComponentElement;
        new (): HTMLSimpleComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "simple-component": HTMLSimpleComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        "configCard"?: {
    name: string;
    color: string;
  };
        "dataCard"?: {
    name: string;
    color: string;
  };
    }
    interface SimpleComponent {
        "configCard"?: {
    name: string;
    color: string;
  };
        "dataCard"?: {
    name: string;
    color: string;
  };
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "simple-component": SimpleComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "simple-component": LocalJSX.SimpleComponent & JSXBase.HTMLAttributes<HTMLSimpleComponentElement>;
        }
    }
}

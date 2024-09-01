import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

import "./Container.css";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<T extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as || "div";

  return (
    <div className="container">
      <Component {...props}>{children}</Component>
    </div>
  );
}

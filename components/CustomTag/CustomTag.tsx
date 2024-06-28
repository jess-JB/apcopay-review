import { createElement } from "react";

function CustomTag(props: CustomTagProps) {
  const { as, children, ...others } = props;

  return createElement(as, others, children);
}

export type CustomTagProps = {
  className?: string;
  as: string;
  children?: React.ReactNode;
};

export default CustomTag;

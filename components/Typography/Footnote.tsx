import classNames from "classnames";
import {
  textColors,
  textLineClamp,
  textPosition,
  type ColorType,
  type LineClamp,
  type Position,
} from "./constant";

import CustomTag from "../CustomTag";

function Footnote(props: FootnoteProps) {
  const {
    className,
    lineClamp,
    colorType,
    uppercase,
    truncate,
    position,
    as = "span",
    children,
  } = props;

  return (
    <CustomTag
      as={as}
      className={classNames(
        "text-footnote-sm tablet:text-footnote-md desktop:text-footnote",
        {
          uppercase,
          truncate,
        },
        lineClamp && textLineClamp[lineClamp],
        colorType && textColors[colorType],
        position && textPosition[position],
        className
      )}
    >
      {children}
    </CustomTag>
  );
}

type FootnoteProps = {
  className?: string;
  children: React.ReactNode;
  lineClamp?: LineClamp;
  colorType?: ColorType;
  uppercase?: boolean;
  truncate?: boolean;
  position?: Position;
  as?: string;
};

export default Footnote;

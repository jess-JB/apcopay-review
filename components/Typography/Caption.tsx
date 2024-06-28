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

function Caption(props: CaptionProps) {
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
        "text-caption-sm tablet:text-caption-md desktop:text-caption",
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

type CaptionProps = {
  className?: string;
  children: React.ReactNode;
  lineClamp?: LineClamp;
  colorType?: ColorType;
  uppercase?: boolean;
  truncate?: boolean;
  position?: Position;
  as?: string;
};

export default Caption;

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

function Subhead(props: SubheadProps) {
  const {
    className,
    lineClamp,
    strong,
    colorType,
    uppercase,
    position,
    truncate,
    as = "span",
    children,
  } = props;

  return (
    <CustomTag
      as={as}
      className={classNames(
        "block",
        {
          "text-subhead-medium-sm tablet:text-subhead-medium-md desktop:text-subhead-medium":
            !strong,
          "text-subhead-bold-sm tablet:text-subhead-bold-md desktop:text-subhead-bold":
            strong,
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

type SubheadProps = {
  className?: string;
  children: React.ReactNode;
  strong?: boolean;
  lineClamp?: LineClamp;
  colorType?: ColorType;
  uppercase?: boolean;
  position?: Position;
  truncate?: boolean;
  as?: string;
};

export default Subhead;

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

function Body(props: BodyProps) {
  const {
    className,
    lineClamp,
    level = 1,
    strong,
    colorType,
    uppercase,
    truncate,
    position,
    as = "p",
    children,
  } = props;

  return (
    <CustomTag
      as={as}
      className={classNames(
        {
          "text-body-1-sm tablet:text-body-1-md desktop:text-body-1":
            level === 1 && !strong,
          "text-body-2-sm tablet:text-body-2-md desktop:text-body-2":
            level === 2 && !strong,
          "text-body-1-bold-sm tablet:text-body-1-bold-md desktop:text-body-1-bold":
            level === 1 && strong,
          "text-body-2-bold-sm tablet:text-body-2-bold-md desktop:text-body-2-bold":
            level === 2 && strong,
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

type BodyProps = {
  className?: string;
  children: React.ReactNode;
  level?: 1 | 2;
  strong?: boolean;
  lineClamp?: LineClamp;
  colorType?: ColorType;
  uppercase?: boolean;
  truncate?: boolean;
  position?: Position;
  as?: string;
};

export default Body;

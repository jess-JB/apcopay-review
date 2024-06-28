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

function Headline(props: HeadlineProps) {
  const {
    className,
    lineClamp,
    level = 1,
    colorType,
    uppercase,
    truncate,
    position,
    children,
  } = props;

  return (
    <CustomTag
      as={`h${level}`}
      className={classNames(
        {
          "text-headline-1-sm tablet:text-headline-1-md desktop:text-headline-1":
            level === 1,
          "text-headline-2-sm tablet:text-headline-2-md desktop:text-headline-2":
            level === 2,
          "text-headline-3-sm tablet:text-headline-3-md desktop:text-headline-3":
            level === 3,
          "text-headline-4-sm tablet:text-headline-4-md desktop:text-headline-4":
            level === 4,
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

type HeadlineProps = {
  className?: string;
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  lineClamp?: LineClamp;
  colorType?: ColorType;
  uppercase?: boolean;
  truncate?: boolean;
  position?: Position;
};

export default Headline;

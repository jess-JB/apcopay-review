import classNames from 'classnames';
import {
  textColors,
  textLineClamp,
  textPosition,
  type ColorType,
  type LineClamp,
  type Position,
} from './constant';

function Hero(props: HeroProps) {
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
    <h1
      className={classNames(
        {
          'text-hero-1-sm tablet:text-hero-1-md desktop:text-hero-1': level === 1,
          'text-hero-2-sm tablet:text-hero-2-md desktop:text-hero-2': level === 2,
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
    </h1>
  );
}

type HeroProps = {
  className?: string;
  children: React.ReactNode;
  level?: 1 | 2;
  lineClamp?: LineClamp;
  colorType?: ColorType;
  uppercase?: boolean;
  truncate?: boolean;
  position?: Position;
};

export default Hero;

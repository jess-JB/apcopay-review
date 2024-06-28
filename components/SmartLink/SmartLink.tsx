import Link, { type LinkProps } from "next/link";
import { type PropsWithChildren } from "react";

const urlRegex = new RegExp("^(?:[a-z+]+:)?//", "i");

function SmartLink(props: SmartLinkProps) {
  const { href, children, ...otherProps } = props;

  if (typeof href === "string" && urlRegex.test(href)) {
    return (
      <a href={href} {...otherProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...otherProps}>
      {children}
    </Link>
  );
}

export default SmartLink;

type SmartLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps &
  PropsWithChildren &
  React.RefAttributes<HTMLAnchorElement>;

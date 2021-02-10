import { Children, cloneElement } from "react"
import { withRouter } from "next/router"
import Link from "next/link"

const LinkElement = withRouter(
  ({ activeClassName, children, router, ...props }) => {
    const child = Children.only(children);

    let className = child.props.className || "";
    const linkPathname = typeof props.href === "string" ? props.href : props.href.pathname || null;

    if (router.pathname === linkPathname && activeClassName) {
      className += ` ${activeClassName}`.trim();
    }

    return <Link {...props}>{cloneElement(child, { className })}</Link>;
  }
);

export default LinkElement
import NextLink, { LinkProps } from "next/link";
import React, { useCallback } from "react";

interface Flink extends LinkProps {
  target?: React.HTMLAttributeAnchorTarget | string;
  children: React.ReactNode;
  className?: string;
}

const Link = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  target,
  className,
  ...anchorProps
}: Flink) => {
  const handleClick = useCallback(
    (e: any) => {
      if ((href as string).startsWith("#")) {
        e.preventDefault();
        const destination = document.querySelector(href as string);
        if (destination) {
          destination.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    },
    [href]
  );
  return (
    <NextLink
      legacyBehavior
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
      locale={locale}
    >
      <a
        tabIndex={0}
        target={target}
        role="link"
        onClick={handleClick}
        onKeyDown={handleClick}
        {...anchorProps}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;

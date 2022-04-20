import React from 'react'
import Link, { LinkProps } from 'next/link'
import classNames from '../lib/classnames'
import { useRouter } from 'next/router'

interface ClassName {
  className?: string
}

interface ActiveLink {
  active?: string
}

const Nav: React.FC<ClassName> = ({ children, className }) => {
  return <div className={className}>{children}</div>
}

export default Nav

export const NavLink: React.FC<ClassName & ActiveLink & LinkProps> = ({
  className,
  active,
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale
}) => {
  const router = useRouter()
  return (
    <Link
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      prefetch={prefetch}
      passHref={passHref}
    >
      <a
        className={classNames(className, router.pathname == href ? active : '')}
      >
        {children}
      </a>
    </Link>
  )
}

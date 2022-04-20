import React from 'react'
import classNames from '../lib/classnames'

export type AvatarTypes = {
  className?: string
  src: string
  alt: string
}

export const AvatarImage: React.FC<AvatarTypes> = ({ className, src, alt }) => {
  return (
    <img
      className={classNames(className, 'rounded-full')}
      src={src}
      alt={alt}
    />
  )
}

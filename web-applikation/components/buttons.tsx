import React from 'react'
import { AvatarImage, AvatarTypes } from './avatar'
import {
  ArrowLeftIcon,
  BanIcon,
  BellIcon,
  BookmarkAltIcon,
  BookmarkIcon,
  DocumentAddIcon,
  DotsHorizontalIcon,
  HomeIcon,
  LibraryIcon,
  SearchIcon
} from '@heroicons/react/outline'

interface ClassName {
  className?: string
}

const defaultButtonStyle = 'w-7 h-7'

export const HomeButton: React.FC<ClassName> = ({
  className = defaultButtonStyle
}) => {
  return <HomeIcon className={className}></HomeIcon>
}

export const SearchButton: React.FC<ClassName> = ({
  className = defaultButtonStyle
}) => {
  return <SearchIcon className={className}></SearchIcon>
}

export const BookmarkButton: React.FC<ClassName> = ({
  className = defaultButtonStyle
}) => {
  return <BookmarkIcon className={className}></BookmarkIcon>
}

export const BookmarksButton: React.FC<ClassName> = ({
  className = defaultButtonStyle
}) => {
  return <BookmarkAltIcon className={className}></BookmarkAltIcon>
}

export const BellButton: React.FC<ClassName> = ({
  className = defaultButtonStyle
}) => {
  return <BellIcon className={className}></BellIcon>
}

export const ArrowLeftButton: React.FC<ClassName> = ({
  className = defaultButtonStyle
}) => {
  return <ArrowLeftIcon className={className}></ArrowLeftIcon>
}

export const ListStoryButton: React.FC<ClassName> = ({
  className = defaultButtonStyle
}) => {
  return <LibraryIcon className={className}></LibraryIcon>
}

export const WriteStoryButton: React.FC<ClassName> = ({
  className = defaultButtonStyle
}) => {
  return <DocumentAddIcon className={className}></DocumentAddIcon>
}

export const AvatarButton: React.FC<AvatarTypes> = ({
  className = defaultButtonStyle,
  src,
  alt
}) => {
  return <AvatarImage className={className} alt={alt} src={src} />
}

export const HomeIconButton: React.FC<AvatarTypes> = ({
  className = defaultButtonStyle,
  src,
  alt
}) => {
  return <img className={className} alt={alt} src={src} />
}

export const HorizontalDotsButton: React.FC<ClassName> = ({
  className = defaultButtonStyle
}) => {
  return <DotsHorizontalIcon className={className}></DotsHorizontalIcon>
}

export const BanButton: React.FC<ClassName> = ({
  className = defaultButtonStyle
}) => {
  return <BanIcon className={className}></BanIcon>
}

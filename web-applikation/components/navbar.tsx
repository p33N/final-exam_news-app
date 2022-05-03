import React, { Fragment } from 'react'
import Nav, { NavLink } from '../components/nav'
import {
  AvatarButton,
  BanButton,
  BellButton,
  BookmarkButton,
  HomeButton,
  HomeIconButton,
  HorizontalDotsButton,
  ListStoryButton,
  SearchButton,
  WriteStoryButton
} from '../components/buttons'
import { Popover } from '@headlessui/react'
import { SignInButton } from './auth'

export const Navbar: React.FC = () => {
  return (
    <>
      <Nav className="sticky top-0 hidden max-h-screen min-w-fit flex-col justify-between bg-gray-50 py-12 lg:flex">
        <NavLink
          href="/"
          passHref
          className="flex justify-center p-2 align-middle text-gray-400"
        >
          <HomeIconButton className="h-9 w-9" src="/favicon.ico" alt="icon" />
        </NavLink>
        <div className="flex flex-col gap-2">
          <NavLink
            href="/"
            passHref
            className="flex grow justify-center p-4 align-middle text-gray-500 transition duration-200 hover:text-gray-800"
            active="text-gray-800"
          >
            <HomeButton />
          </NavLink>
          <NavLink
            href="/user/notifications"
            passHref
            className="flex grow justify-center p-4 align-middle text-gray-500 transition duration-200 hover:text-gray-800"
            active="text-gray-800"
          >
            <BellButton />
          </NavLink>
          <NavLink
            href="/user/bookmarks"
            passHref
            className="flex grow justify-center p-4 align-middle text-gray-500 transition duration-200 hover:text-gray-800"
            active="text-gray-800"
          >
            <BookmarkButton />
          </NavLink>
          <NavLink
            href="/user/stories"
            passHref
            className="flex grow justify-center p-4 align-middle text-gray-500 transition duration-200 hover:text-gray-800"
            active="text-gray-800"
          >
            <ListStoryButton />
          </NavLink>
          <div className="mx-4 border-b-2"></div>
          <NavLink
            href="/write-story"
            passHref
            className="flex grow justify-center p-4 align-middle text-gray-500 transition duration-200 hover:text-gray-800"
            active="text-gray-800"
          >
            <WriteStoryButton />
          </NavLink>
        </div>
        <Popover className="relative flex justify-center">
          <Popover.Button>
            <AvatarButton
              className="h-9 w-9 border border-gray-400"
              src="/logo-placeholder-avatar.png"
              alt="Placeholder Avatar Logo"
            />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 w-52 translate-x-[50%] -translate-y-[110%] rounded-md border-2 bg-gray-50 shadow-sm">
            <div className="flex w-full justify-center py-4 px-6 text-gray-500">
              <SignInButton />
            </div>
          </Popover.Panel>
        </Popover>
      </Nav>
      <Nav className="fixed bottom-0 z-10 flex w-full justify-around gap-1 border-t-2 bg-gray-100 lg:hidden">
        <NavLink
          href="/"
          passHref
          className="flex grow justify-center p-2 align-middle text-gray-500"
          active="text-gray-800"
        >
          <HomeButton />
        </NavLink>
        <NavLink
          href="/user/bookmarks"
          passHref
          className="flex grow justify-center p-2 align-middle text-gray-500"
          active="text-gray-800"
        >
          <BookmarkButton />
        </NavLink>
        <NavLink
          href="/search"
          passHref
          className="flex grow justify-center p-2 align-middle text-gray-500"
          active="text-gray-800"
        >
          <SearchButton />
        </NavLink>
        <NavLink
          href="/user"
          passHref
          className="flex grow justify-center p-2 align-middle text-gray-500"
          active="text-gray-800"
        >
          <AvatarButton
            src="https://avatars.githubusercontent.com/u/73331861?v=4"
            alt="Alexander Lawaetz"
          />
        </NavLink>
      </Nav>
    </>
  )
}

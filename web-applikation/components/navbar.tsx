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
import Link from 'next/link'
import { SignInButton } from './auth'

export const Navbar: React.FC = () => {
  const signIn = false

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
        <Popover className="relative flex justify-center p-4 align-middle">
          <Popover.Button>
            {signIn ? (
              <AvatarButton
                className="h-9 w-9"
                src="https://avatars.githubusercontent.com/u/73331861?v=4"
                alt="Alexander Lawaetz"
              />
            ) : (
              <AvatarButton
                className="h-9 w-9 border border-gray-400"
                src="/avatar-placeholder.png"
                alt="Placeholder Avatar Image"
              />
            )}
          </Popover.Button>
          <Popover.Panel className="absolute z-10 mb-8 flex max-w-6xl translate-x-[50%] -translate-y-[110%] whitespace-nowrap rounded-md border-2 bg-gray-50 shadow-sm">
            <div className="flex grow flex-col items-start divide-y-2">
              {signIn ? (
                <>
                  <div className="w-full py-4 px-6">
                    <Link href="/">
                      <a className="text-green-700">Be come a member</a>
                    </Link>
                  </div>
                  <div className="flex w-full flex-col items-start gap-3 py-4 px-6">
                    <button className="text-gray-500 hover:text-gray-900">
                      Sign out
                    </button>
                    <button className="text-gray-500 hover:text-gray-900">
                      Refine recommendations
                    </button>
                    <button className="text-gray-500 hover:text-gray-900">
                      Manage publications
                    </button>
                    <button className="text-gray-500 hover:text-gray-900">
                      Settings
                    </button>
                  </div>
                  <Link href="/user/profile">
                    <a className="flex max-w-full grow gap-2 p-4">
                      <AvatarButton
                        className="h-9 w-9"
                        src="https://avatars.githubusercontent.com/u/73331861?v=4"
                        alt="Alexander Lawaetz"
                      />
                      <div className="flex grow flex-col overflow-hidden">
                        <span className="text-sm">Alexander Lawetz</span>
                        <span className="truncate text-sm">
                          @alexander.enetoft.lawaetz
                        </span>
                      </div>
                    </a>
                  </Link>
                </>
              ) : (
                <div className="w-full py-4 px-6">
                  <SignInButton />
                </div>
              )}
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

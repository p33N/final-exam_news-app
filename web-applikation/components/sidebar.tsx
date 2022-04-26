import Link from 'next/link'
import React from 'react'
import range from '../lib/range'
import { ArticleSlim } from './article'
import { SearchButton } from './buttons'

const Sidebar: React.FC = ({ children }) => {
  return (
    <div className="sticky top-0 hidden h-screen max-w-xs bg-inherit lg:block lg:max-w-sm">
      <div className="mt-9 flex flex-col gap-6 px-8">
        <label
          htmlFor="search-artikel"
          className="flex w-full items-center gap-2 rounded-full border border-gray-200 p-4 shadow-lg"
        >
          <SearchButton className="h-5 w-5" />
          <input
            id="search-artikel"
            className="form-input h-6 w-full border-none bg-inherit p-2 hover:cursor-text"
            type="text"
            placeholder="Search"
          />
        </label>
        {children}
      </div>
    </div>
  )
}

export const RecommenedTopics: React.FC = () => {
  return (
    <div>
      <h2 className="my-4 text-xl font-medium">Recommended topics</h2>
      <div className="flex flex-wrap gap-2">
        {[...range(1, 7)].map((items) => (
          <Link href="">
            <a className="whitespace-nowrap rounded-full bg-gray-200 py-2 px-4 text-sm transition duration-200 hover:bg-gray-400">
              Hello ello
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const WhoToFollow: React.FC = () => {
  return (
    <div>
      <h2 className="my-4 text-xl font-medium">Who to follow</h2>
      <div className="flex flex-col gap-2">
        {[...range(1, 3)].map((items) => (
          <div className="flex justify-between">
            <Link href="">
              <a className="flex gap-3">
                <img
                  className="h-12 w-12 rounded-full drop-shadow-md"
                  src="https://avatars.githubusercontent.com/u/73331861?v=4"
                  alt="Alexander Lawaetz"
                />
                <div className="flex grow flex-col">
                  <p className="font-md">Alexander Lawaetz</p>
                  <p className="text-sm font-light line-clamp-2">Bio</p>
                </div>
              </a>
            </Link>
            <button className="h-fit rounded-full border border-gray-400 py-1 px-2 transition duration-200 hover:border-gray-600 hover:bg-gray-200">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export const RecentlyViewed: React.FC = () => {
  return (
    <div>
      <h2 className="my-4 text-xl font-medium">Recently saved</h2>
      <div className="flex flex-col gap-2">
        {[...range(1, 3)].map((key) => (
          <Link href="">
            <a>
              <ArticleSlim key={key} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

import React from 'react'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import { HorizontalDotsButton, BookmarkButton, BanButton } from './buttons'

interface TypeArticle {
  key?: React.Key
}

const Article: React.FC<TypeArticle> = ({ key }) => {
  return (
    <div className="py-5" key={key}>
      <div className="mb-2 flex items-center gap-1 text-sm">
        <img
          className="h-7 w-7 rounded-full"
          src="https://avatars.githubusercontent.com/u/73331861?v=4"
          alt="Alexander Lawaetz"
        />
        <span className="font-semibold">Alexander Lawaetz</span>
        <span className="text-gray-400">&#x2022;</span>
        <span className="text-gray-400">12 hours ago</span>
      </div>
      <div className="flex gap-2 md:gap-10">
        <div className="grow">
          <h2 className="mb-2 text-xl font-medium">
            React Version 18 | What&#39;s New?
          </h2>
          <div className="hidden sm:block">
            <p className="line-clamp-3">
              React V18 is finally here! And it promises a better user
              experience, improved performance, and long-term focus. It is
              particular for setting the foundation for the future of React,
              while also rolling out some interesting features, most of which
              are built around concurrent re-rendering. Using version 18 only
              requires dasdasdasdasda
            </p>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="flex items-center gap-2 text-sm">
              <button className="rounded-full bg-gray-200 px-2 py-1 text-sm">
                React
              </button>
              <span className="text-gray-400">2 min read</span>
              <span className="hidden text-gray-400 sm:block">&#x2022;</span>
              <span className="hidden text-gray-400 sm:block">
                Selected for you
              </span>
            </div>
            <div className="flex gap-2">
              <button>
                <BookmarkButton className="h-6 w-6 text-gray-400" />
              </button>
              <Popover className="relative">
                <Popover.Button>
                  <HorizontalDotsButton className="text h-6 w-6" />
                </Popover.Button>
                <Popover.Panel className="absolute z-10 w-52 -translate-x-[40%] rounded-md border-2 bg-gray-50 shadow-sm">
                  <div className="flex flex-col items-start divide-y-2">
                    <div className="w-full py-4 px-6">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-gray-900">
                        <BanButton className="h-4 w-4 text-gray-900" />
                        <div>See less of this</div>
                      </button>
                    </div>
                    <div className="flex w-full flex-col items-start gap-3 py-4 px-6">
                      <button className="text-gray-500 hover:text-gray-900">
                        Mute this author
                      </button>
                      <button className="text-gray-500 hover:text-gray-900">
                        Report
                      </button>
                    </div>
                  </div>
                </Popover.Panel>
              </Popover>
            </div>
          </div>
        </div>
        <div className="image-container relative aspect-4 h-20 w-20 sm:h-40 sm:w-40">
          <Image
            alt="Article Image"
            src="/mountains.jpg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}

export const ArticleSlim: React.FC<TypeArticle> = ({ key }) => {
  return (
    <div className="py-2" key={key}>
      <div className="mb-1 flex items-center gap-1 text-sm">
        <img
          className="h-6 w-6 rounded-full"
          src="https://avatars.githubusercontent.com/u/73331861?v=4"
          alt="Alexander Lawaetz"
        />
        <span className="text-sm font-semibold">Alexander Lawaetz</span>
        <span className="text-gray-400">&#x2022;</span>
        <span className="text-gray-400">12 hours ago</span>
      </div>
      <div className="flex gap-1">
        <div className="grow">
          <h2 className="text-md font-medium">
            React Version 18 | What&#39;s New?
          </h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span className="hidden text-gray-400 sm:block">
                Dec 11, 2021
              </span>
              <span className="hidden text-gray-400 sm:block">&#x2022;</span>
              <span className="text-gray-400">2 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article

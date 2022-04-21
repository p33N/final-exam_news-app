import { Popover, Tab } from '@headlessui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  BanButton,
  BookmarkButton,
  HorizontalDotsButton
} from '../components/buttons'
import { Navbar } from '../components/navbar'
import UserTopics from '../components/usertopics'
import classNames from '../lib/classnames'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog Artiklen</title>
        <meta
          name="description"
          content="News site for journalists to share their expertise within their work, or hoppy field online"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen divide-x-2 lg:mx-auto lg:max-w-[1504px]">
        <Navbar />
        <div className="mb-20 grow px-6">
          <div className="mx-auto max-w-2xl">
            <UserTopics />
            <div className="hidden">
              <h1 className="mt-8 mb-4 text-5xl font-extrabold">
                Psychedelics
              </h1>
              <div className="flex gap-2">
                <button className="rounded-xl px-2 py-1 text-green-700 outline outline-1 outline-green-700">
                  Following
                </button>
                <button className="rounded-xl px-2 py-1 text-green-700 outline outline-1 outline-green-700">
                  Start Writing
                </button>
              </div>
            </div>
            <Tab.Group defaultIndex={1}>
              <Tab.List className="border-b">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'py-4 pr-4 text-gray-400',
                      selected ? 'text-gray-900' : ''
                    )
                  }
                >
                  Following
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'py-4 pr-4 text-gray-400',
                      selected ? 'text-gray-900' : ''
                    )
                  }
                >
                  Recommened
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="mt-10 flex flex-col items-center justify-center gap-4 p-4">
                    <p>Stories from writers you follow will appear here.</p>
                    <button className="rounded-full bg-green-700 py-3 px-4 text-white">
                      Browse Recommeneded stories
                    </button>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="mt-8 flex flex-col divide-y-2">
                    {[1, 2, 3, 4, 5, 6].map((key) => (
                      <div className="py-5" key={key}>
                        <div className="mb-2 flex items-center gap-1 text-sm">
                          <img
                            className="h-7 w-7 rounded-full"
                            src="https://avatars.githubusercontent.com/u/73331861?v=4"
                            alt="Alexander Lawaetz"
                          />
                          <span className="font-semibold">
                            Alexander Lawaetz
                          </span>
                          <span className="text-gray-400">&#x2022;</span>
                          <span className="text-gray-400">12 hours ago</span>
                        </div>
                        <div className="flex gap-2 md:gap-10">
                          <div className="grow">
                            <h2 className="mb-2 text-xl font-semibold">
                              React Version 18 | What’s New?
                            </h2>
                            <div className="hidden sm:block">
                              <p className="line-clamp-3">
                                React V18 is finally here! And it promises a
                                better user experience, improved performance,
                                and long-term focus. It is particular for
                                setting the foundation for the future of React,
                                while also rolling out some interesting
                                features, most of which are built around
                                concurrent re-rendering. Using version 18 only
                                requires dasdasdasdasda
                              </p>
                            </div>
                            <div className="mt-6 flex justify-between">
                              <div className="flex items-center gap-2 text-sm">
                                <button className="rounded-full bg-gray-200 px-2 py-1 text-sm">
                                  React
                                </button>
                                <span className="text-gray-400">
                                  2 min read
                                </span>
                                <span className="hidden text-gray-400 sm:block">
                                  &#x2022;
                                </span>
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
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        <div className="sticky top-0 hidden h-screen max-w-xs bg-inherit lg:block lg:max-w-sm">
          <div className="mx-8 mt-9">
            <p className="">
              sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar
              sidebar sidebar sidebar sidebar sidebar sidebar sidebar sidebar
              sidebar sidebar sidebar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

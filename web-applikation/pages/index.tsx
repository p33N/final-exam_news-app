import { Tab } from '@headlessui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Article, { ArticleSlim } from '../components/article'
import { SearchButton } from '../components/buttons'
import { NavLink } from '../components/nav'
import { Navbar } from '../components/navbar'
import UserTopics from '../components/usertopics'
import classNames from '../lib/classnames'
import range from '../lib/range'

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
                      'py-4 pr-4 ',
                      selected ? 'text-gray-900' : 'text-gray-400'
                    )
                  }
                >
                  Following
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'py-4 pr-4 ',
                      selected ? 'text-gray-900' : 'text-gray-400'
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
                    {[...range(1, 7)].map((key) => (
                      <Article key={key} />
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
        <div className="sticky top-0 hidden h-screen max-w-xs bg-inherit lg:block lg:max-w-sm">
          <div className="mt-9 flex flex-col gap-6 px-8">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}

const Sidebar: React.FC = () => {
  return (
    <>
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
      <div>
        <h2 className="my-4 text-xl font-medium">Recommended topics</h2>
        <div className="flex flex-wrap gap-2">
          {[...range(1, 7)].map((items) => (
            <span className="whitespace-nowrap rounded-full bg-gray-200 py-2 px-4 text-sm">
              Hello ello
            </span>
          ))}
        </div>
      </div>
      <div>
        <h2 className="my-4 text-xl font-medium">Who to follow</h2>
        <div className="flex flex-col gap-2">
          {[...range(1, 3)].map((items) => (
            <div className="flex justify-between">
              <NavLink href="" className="flex gap-3">
                <img
                  className="h-12 w-12 rounded-full drop-shadow-md"
                  src="https://avatars.githubusercontent.com/u/73331861?v=4"
                  alt="Alexander Lawaetz"
                />
                <div className="flex grow flex-col">
                  <p className="font-md">Alexander Lawaetz</p>
                  <p className="text-sm font-light line-clamp-2">Bio</p>
                </div>
              </NavLink>
              <button className="h-fit rounded-full border border-gray-400 py-1 px-2 hover:border-gray-600 hover:bg-gray-200">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="my-4 text-xl font-medium">Recently saved</h2>
        <div className="flex flex-col gap-2">
          {[...range(1, 3)].map((key) => (
            <ArticleSlim key={key} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home

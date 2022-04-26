import { Tab } from '@headlessui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Article from '../components/article'
import MainSection from '../components/mainsection'
import { Navbar } from '../components/navbar'
import Sidebar, {
  RecentlyViewed,
  RecommenedTopics,
  WhoToFollow
} from '../components/sidebar'
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
      <div className="flex divide-x-2 lg:mx-auto lg:max-w-[1504px]">
        <Navbar />
        <MainSection>
          <UserTopics />
          <div className="hidden">
            <h1 className="mt-8 mb-4 text-5xl font-extrabold">Psychedelics</h1>
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
                    'mr-4 py-4',
                    selected
                      ? 'border-b border-gray-900 text-gray-900'
                      : 'text-gray-500'
                  )
                }
              >
                Following
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'mr-4 py-4',
                    selected
                      ? 'border-b border-gray-900 text-gray-900'
                      : 'text-gray-500'
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
        </MainSection>
        <Sidebar>
          <RecommenedTopics />
          <WhoToFollow />
          <RecentlyViewed />
        </Sidebar>
      </div>
    </div>
  )
}

export default Home

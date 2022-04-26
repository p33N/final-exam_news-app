import { Tab } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'
import MainSection from '../../components/mainsection'
import { Navbar } from '../../components/navbar'
import Sidebar, {
  RecentlyViewed,
  RecommenedTopics,
  WhoToFollow
} from '../../components/sidebar'
import classNames from '../../lib/classnames'

const Notifications: React.FC = () => {
  return (
    <div className="flex divide-x-2 lg:mx-auto lg:max-w-[1504px]">
      <Navbar />

      <MainSection>
        <div className="flex items-center">
          <h1 className="mt-4 mb-6 text-4xl font-semibold">Notifications</h1>
        </div>
        <Tab.Group>
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
              All
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
              Responses
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="mt-10 flex justify-between gap-4 p-4">
                <p className="text-gray-500">You&#39;re all caught up.</p>
                <Link href="">
                  <a className="text-green-700">Your stats</a>
                </Link>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mt-10 flex justify-between gap-4 p-4">
                <p className="text-gray-500">You&#39;re all caught up.</p>
                <Link href="">
                  <a className="text-green-700">Your stats</a>
                </Link>
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
  )
}

export default Notifications

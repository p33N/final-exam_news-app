import { Tab } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'
import MainSection from '../../components/mainsection'
import { Navbar } from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import classNames from '../../lib/classnames'

const Profile: React.FC = () => {
  return (
    <div className="flex divide-x-2 lg:mx-auto lg:max-w-[1504px]">
      <Navbar />

      <MainSection>
        <div className="items-center justify-between lg:flex">
          <h1 className="mt-4 mb-6 text-4xl font-semibold">Your stories</h1>
          <div className="items flex gap-2">
            <button className="h-10 rounded-full bg-green-700 py-2 px-4 text-white hover:bg-green-800">
              Write Story
            </button>
            <button className="h-10 rounded-full border border-green-700 py-2 px-4 hover:border-green-800 hover:shadow">
              Import Story
            </button>
          </div>
        </div>
        <Tab.Group>
          <Tab.List className="border-b">
            <Tab
              className={({ selected }) =>
                classNames(
                  'mr-4 py-4 ',
                  selected
                    ? 'border-b border-gray-900 text-gray-900'
                    : 'text-gray-500'
                )
              }
            >
              Draft
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  'mr-4 py-4 ',
                  selected
                    ? 'border-b border-gray-900 text-gray-900'
                    : 'text-gray-500'
                )
              }
            >
              Published
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
              <div className="mt-10 flex flex-col items-center justify-center gap-4 p-4">
                <p>You have no drafts.</p>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 p-4">
                <p>You haven&#39;t published any public stories yet.</p>
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

      <Sidebar></Sidebar>
    </div>
  )
}

export default Profile

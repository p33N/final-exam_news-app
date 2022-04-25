import Link from 'next/link'
import React from 'react'
import range from '../lib/range'

const UserTopics: React.FC = () => {
  return (
    <div className="mt-9 mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <div className="whitespace-nowrap uppercase text-gray-700">
        Your Topics
      </div>
      <div className="container-snap flex w-full max-w-xs gap-4 overflow-x-auto rounded-full p-2 shadow-md sm:max-w-md md:max-w-none">
        {[...range(1, 15)].map((items) => (
          <Link href="">
            <a className="whitespace-nowrap rounded-full bg-gray-200 py-2 px-4 text-sm font-medium transition duration-200 hover:bg-gray-400">
              Hello
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default UserTopics

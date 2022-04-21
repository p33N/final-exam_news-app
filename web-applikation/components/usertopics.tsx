import React from 'react'

const UserTopics: React.FC = () => {
  return (
    <div className="mt-9 mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <div className="whitespace-nowrap uppercase text-gray-700">
        Your Topics
      </div>
      <div className="container-snap flex w-full max-w-xs gap-4 overflow-x-auto rounded-full p-4 shadow-lg sm:max-w-md md:max-w-none">
        {[
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ].map((items) => (
          <span>Hello</span>
        ))}
      </div>
    </div>
  )
}

export default UserTopics

import React from 'react'

const MainSection: React.FC = ({ children }) => {
  return (
    <section className="grow px-6 pb-20">
      <div className="mx-auto mt-9 max-w-2xl">{children}</div>
    </section>
  )
}

export default MainSection

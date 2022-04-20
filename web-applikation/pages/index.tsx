import type { NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/navbar'

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
      <div className="bg-gray-50">
        <div className="mx-auto flex min-h-screen max-w-[1504px] divide-x-2 ">
          <Navbar />
          <div className="grow"></div>
          <div className="w-24"></div>
        </div>
      </div>
    </div>
  )
}

export default Home

import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/UnauthenticatedHeader'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>STORM - Entreprenurship made organized</title>
        <meta
          name="description"
          content="No more keeping track of emails, appointments, contacts, and leads. We provide the tools you need to focus on changing the world."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}

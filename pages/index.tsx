import Head from 'next/head'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { JavaScriptSection } from '@/components/JavaScriptSection/JavaScriptSection'
import { LogoAndAPISection } from '@/components//LogoAndAPISection/LogoAndAPISection'
import { MarkupSection } from '@/components/MarkupSection/MarkupSection'
import { AuditScoreSection } from '@/components/AuditScoreSection/AuditScoreSection'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Monogram Design Test</title>
        <meta name="description" content="Monogram design test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection/>
      <JavaScriptSection/>
      <LogoAndAPISection/>
      <MarkupSection/>
      <AuditScoreSection/>
      <Footer/>
    </>
  )
}

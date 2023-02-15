import Head from 'next/head'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { JavaScriptSection } from '@/components/JavaScriptSection/JavaScriptSection'
import { LogoSection } from '@/components/LogoSection/LogoSection'
import { MarkupSection } from '@/components/MarkupSection/MarkupSection'
import { APISection } from '@/components/APISection/APISection'
import { AuditScoreSection } from '@/components/AuditScoreSection/AuditScoreSection'
import { Footer } from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Monogram Design Test</title>
        <meta name="description" content="Monogram design test" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>
      <HeroSection/>
      <JavaScriptSection/>
      <LogoSection/>
      <APISection/>
      <MarkupSection/>
      <AuditScoreSection/>
      <Footer/>
    </>
  )
}

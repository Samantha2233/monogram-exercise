import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Monogram Design Test</title>
        <meta name="description" content="Monogram design test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.h1}>jamstack
          <span className={`${styles.h1} ${styles.gradientText}`}>101</span>
        </h1>
        
      </div>

      <p className={styles.heroText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit. </p>
    </>
  )
}

import BillAmountInputGroup from '@/components/BillAmountInputGroup'
import Logo from '@/components/Logo'
import Tip from '@/components/Tip'
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import { useEffect, useRef } from 'react'

export default function Home() {
  const billRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    billRef.current?.focus()
    billRef.current?.select()
  }, [])

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Frontend Mentor | Tip calculator app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <title>Frontend Mentor | Tip calculator app</title>
      </Head>
      <main className={styles.home}>
        <Logo />
        <form className={styles.calculatorContainer}>
          <BillAmountInputGroup ref={billRef} />

          <div className={styles.selectTipContainer}>
            <Tip />
          </div>

          <div className={styles.numberOfPeopleContainer}></div>

          <div className={styles.resultContainer}></div>
        </form>
      </main>
    </>
  )
}

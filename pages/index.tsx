import iconDollar from '@/assets/images/icon-dollar.svg'
import iconPerson from '@/assets/images/icon-person.svg'
import logo from '@/assets/images/logo.svg'
import Label from '@/components/Label'
import MoneyInput from '@/components/MoneyInput'
import NumberInput from '@/components/NumberInput'
import styles from '@/styles/Home.module.scss'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
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
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt=""
          />
        </div>
        <div className={styles.calculatorContainer}>
          <div className={styles.billContainer}>
            <Label htmlFor="bill">Bill</Label>
            <MoneyInput
              id="bill"
              onChange={(b) => console.log(b)}
            />
          </div>

          <div className={styles.selectTipContainer}></div>

          <div className={styles.numberOfPeopleContainer}></div>

          <div className={styles.resultContainer}></div>
        </div>
      </main>
    </>
  )
}

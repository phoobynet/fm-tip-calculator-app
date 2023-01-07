import logo from '@/assets/images/logo.svg'
import Label from '@/components/Label'
import MoneyInput from '@/components/MoneyInput'
import NumberInput from '@/components/NumberInput'
import styles from '@/styles/Home.module.scss'
import { useFormik } from 'formik'
import Head from 'next/head'
import Image from 'next/image'

interface FormValues {
  bill?: number
  tip?: number
  numberOfPeople?: number
}

const tipOptions = [5, 10, 15, 25, 50]

export default function Home() {
  const formik = useFormik<FormValues>({
    initialValues: {},
    onSubmit(values) {
      console.log(values)
    },
  })
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
        <form
          className={styles.calculatorContainer}
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.billContainer}>
            <Label htmlFor="bill">Bill</Label>
            <MoneyInput
              id="bill"
              onChange={formik.handleChange}
              value={formik.values.bill}
              hasError={!!formik.errors.bill}
            />
          </div>

          <div className={styles.selectTipContainer}>
            <Label htmlFor="tip">Select Tip %</Label>
            <div className={styles.selectTip}>
              {tipOptions.map((tip, i) => (
                <>
                  <label style={{ appearance: 'button' }}>
                    <input
                      type="radio"
                      name="tip"
                      value={tip}
                      checked={formik.values.tip === tip}
                    />
                    {`${tip}%`}
                  </label>
                </>
              ))}
              <input type="number" />
            </div>
          </div>

          <div className={styles.numberOfPeopleContainer}></div>

          <div className={styles.resultContainer}></div>
        </form>
      </main>
    </>
  )
}

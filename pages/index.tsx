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

const formTipOptions = [5, 10, 15, 25, 50]

export default function Home() {
  const formik = useFormik<FormValues>({
    initialValues: {},
    onSubmit(values) {
      console.log(values)
    },
    validate(values) {
      const errors: Record<string, string> = {}

      // TODO: Validate

      console.log(values)

      return errors
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
              {formTipOptions.map((tip, i) => (
                <>
                  <label
                    // style={{ appearance: 'button' }}
                    className={formik.values.tip === tip ? styles.selected : ''}
                  >
                    <input
                      type="radio"
                      name="tip"
                      value={tip.toString()}
                      checked={formik.values.tip === tip}
                      onChange={(e) =>
                        formik.setFieldValue(
                          'tip',
                          parseInt(e.target.value, 10),
                        )
                      }
                    />
                    {`${tip}%`}
                  </label>
                </>
              ))}
              <NumberInput
                id="tip"
                numberType={'integer'}
                onChange={formik.handleChange}
                value={formik.values.tip}
                placeholder="Custom"
                max={100}
                maxLength={3}
              />
            </div>
          </div>

          <div className={styles.numberOfPeopleContainer}></div>

          <div className={styles.resultContainer}></div>
        </form>
      </main>
    </>
  )
}

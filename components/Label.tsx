import styles from './Label.module.scss'
import { LabelHTMLAttributes, PropsWithChildren } from 'react'

type Props = Omit<LabelHTMLAttributes<HTMLLabelElement>, 'className'>

export default function Label({
  children,
  ...labelAttrs
}: PropsWithChildren<Props>) {
  return (
    <label
      {...labelAttrs}
      className={styles.label}
    >
      {children}
    </label>
  )
}

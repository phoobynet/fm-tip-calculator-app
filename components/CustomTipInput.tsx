import styles from './CustomTipInput.module.scss'
import { InputHTMLAttributes, forwardRef } from 'react'

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'id' | 'className'
  > {
  id: string
}

export default forwardRef<HTMLInputElement, Props>(function CustomTipInput(
  { id, ...inputAttrs }: Props,
  ref,
) {
  return (
    <input
      ref={ref}
      type="number"
      className={styles.customTipInput}
      {...inputAttrs}
    />
  )
})

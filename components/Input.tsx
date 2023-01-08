import styles from './Input.module.scss'
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  KeyboardEventHandler,
} from 'react'

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'id' | 'type' | 'onChange' | 'value'
  > {
  id: string
  type: HTMLInputTypeAttribute
  onChange: ChangeEventHandler<HTMLInputElement>
  value: string | ReadonlyArray<string> | number | undefined
  allowedKeys?: string[]
}

export default function Input({
  id,
  onChange,
  value,
  type,
  className,
  allowedKeys,
  ...inputAttrs
}: Props) {
  const onKeyDownHandler: KeyboardEventHandler = (e) => {
    if (!allowedKeys?.length) {
      return
    }
  }

  return (
    <input
      type={type}
      id={id}
      onKeyDown={onKeyDownHandler}
      onChange={onChange}
      value={value}
      className={`${styles.input} ${className}`}
      {...inputAttrs}
    />
  )
}

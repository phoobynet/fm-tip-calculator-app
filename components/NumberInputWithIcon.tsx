import styles from './NumberInput.module.scss'
import Image, { StaticImageData } from 'next/image'
import React, {
  InputHTMLAttributes,
  KeyboardEvent,
  KeyboardEventHandler,
  useMemo,
  useRef,
} from 'react'

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'type' | 'id'
  > {
  id: string
  icon: StaticImageData
  numberType: 'float' | 'integer'
  hasError?: boolean
}

const integerAllowedKeys = [
  'Backspace',
  'Enter',
  'Delete',
  'Tab',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'ArrowDown',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]

const floatAllowedKeys = [...integerAllowedKeys, '.']

const isKeyPermitted = (allowedKeys: Array<string>, key: string): boolean =>
  allowedKeys.includes(key)

export default function NumberInputWithIcon({
  id,
  icon,
  numberType,
  hasError,
  ...inputAttrs
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const allowedKeys = useMemo(
    () => (numberType === 'float' ? floatAllowedKeys : integerAllowedKeys),
    [numberType],
  )

  const isLessThanOrEqualToMax = (key: string): boolean => {
    console.log('isLessThanOrEqualToMax: ' + key)
    return true
  }

  const allowKeyDown = (keyboardEvent: KeyboardEvent): boolean =>
    isKeyPermitted(allowedKeys, keyboardEvent.key) &&
    isLessThanOrEqualToMax(keyboardEvent.key)

  const onKeyDownHandler: KeyboardEventHandler = (e) => {
    if (allowKeyDown(e)) {
      return
    }

    e.preventDefault()
  }

  const selectAll = () => {
    inputRef?.current?.select()
  }

  return (
    <div
      className={styles.numberInputWithIcon}
      onClick={selectAll}
      data-error={hasError}
    >
      <div className={styles.iconContainer}>
        <Image
          src={icon}
          alt=""
        />
      </div>
      <input
        ref={inputRef}
        id={id}
        {...inputAttrs}
        type="number"
        className={styles.input}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  )
}

import styles from './NumberInput.module.scss'
import Image, { StaticImageData } from 'next/image'
import React, { InputHTMLAttributes, KeyboardEventHandler, useRef } from 'react'

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'> {
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

export default function NumberInput({
  icon,
  numberType,
  hasError,
  ...inputAttrs
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const onKeyDownHandler: KeyboardEventHandler = (e) => {
    if (
      (numberType === 'float' ? floatAllowedKeys : integerAllowedKeys).includes(
        e.key,
      )
    ) {
      return
    }
    e.preventDefault()
  }

  const selectAll = () => {
    inputRef?.current?.select()
  }

  return (
    <div
      className={styles.numberInput}
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
        {...inputAttrs}
        type="number"
        className={styles.input}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  )
}

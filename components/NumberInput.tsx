import styles from './NumberInput.module.scss'
import Image, { StaticImageData } from 'next/image'
import React, { ChangeEventHandler, InputHTMLAttributes } from 'react'

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'type' | 'onChange'
  > {
  icon: StaticImageData
  numberType: 'float' | 'integer'
  onChange: (value: number) => void
}

export default function NumberInput({
  icon,
  onChange,
  numberType,
  ...inputAttrs
}: Props) {
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    let v: number
    if (numberType === 'float') {
      v = Number.parseFloat(e.target.value)
    } else {
      v = Number.parseInt(e.target.value)
    }

    if (isNaN(v)) {
      return
    }

    onChange(v)
  }
  return (
    <div className={styles.numberInput}>
      <div className={styles.iconContainer}>
        <Image
          src={icon}
          alt=""
        />
      </div>
      <input
        {...inputAttrs}
        onChange={onChangeHandler}
        type="number"
        className={styles.input}
      />
    </div>
  )
}

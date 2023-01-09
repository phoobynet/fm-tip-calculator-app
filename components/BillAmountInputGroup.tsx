import styles from './BillAmountInputGroup.module.scss'
import iconDollar from '@/assets/images/icon-dollar.svg'
import Label from '@/components/Label'
import { useTipCalcStore } from '@/stores/useTipCalcStore'
import Image from 'next/image'
import React, { forwardRef, useRef, useState } from 'react'

export default forwardRef<HTMLInputElement, {}>(function BillAmountInputGroup(
  {},
  ref,
) {
  const bill = useTipCalcStore((state) => state.bill)
  const billError = useTipCalcStore((state) => state.billError)
  const updateBill = useTipCalcStore((state) => state.updateBill)

  const inputRef = useRef<HTMLInputElement>(null)
  const [hasFocus, setHasFocus] = useState<boolean>(false)

  const selectAll = () => {
    inputRef?.current?.select()
  }

  return (
    <div className={styles.billAmountInputGroup}>
      <Label htmlFor="bill">Bill</Label>
      <div
        className={styles.billAmountInput}
        onClick={selectAll}
        data-focus={hasFocus}
        data-error={!!billError}
      >
        <div className={styles.iconContainer}>
          <Image
            src={iconDollar}
            alt=""
          />
        </div>
        <input
          ref={ref}
          value={bill || ''}
          type="number"
          className={styles.input}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          placeholder="0"
          onChange={(e) => updateBill(parseInt(e.target.value, 10))}
        ></input>
      </div>
    </div>
  )
})

import styles from './Tip.module.scss'
import CustomTipInput from '@/components/CustomTipInput'
import Label from '@/components/Label'
import { useTipCalcStore } from '@/stores/useTipCalcStore'
import { useEffect, useState } from 'react'

const tips = [5, 10, 15, 25, 50]

export default function Tip() {
  const tip = useTipCalcStore((state) => state.tip)
  const [selectedTip, setSelectedTip] = useState<number>()
  const [customTip, setCustomTip] = useState<number>()

  useEffect(() => {
    if (customTip ?? 0 > 0) {
      setSelectedTip(undefined)
    }
  }, [selectedTip, customTip])

  return (
    <div className={styles.tip}>
      <Label htmlFor="tip">Select Tip %</Label>
      <div className={styles.selectTip}>
        {tips.map((tipOption) => {
          const key = `tip_${tipOption}`
          return (
            <label
              key={key}
              className={selectedTip === tipOption ? styles.selected : ''}
              onClick={(e) => console.log(e.nativeEvent.timeStamp)}
              htmlFor={key}
            >
              <input
                type="radio"
                id={key}
                name="selectedTip"
                value={tipOption.toString()}
                checked={tipOption === selectedTip}
                onChange={() => setSelectedTip(tipOption)}
              />
              {`${tipOption}%`}
            </label>
          )
        })}
        <CustomTipInput
          value={customTip || ''}
          onChange={(e) => setCustomTip(parseInt(e.target.value, 10))}
          name="customTip"
          id="customTip"
        />
      </div>
    </div>
  )
}

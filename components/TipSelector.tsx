import styles from './TipSelector.module.scss'
import numeral from 'numeral'

interface Props {
  values: number[]
  value?: number
  onChange: (value: number) => void
}

export default function TipSelector({ values, value, onChange }: Props) {
  return (
    <div
      className={styles.tipSelector}
      role="group"
      aria-labelledby="tip-selector-group"
    >
      {values.map((v, i) => (
        <div key={i}>
          <label>
            <input
              type="radio"
              value={v}
              id={`value_${v}`}
              name="tip-selector"
              checked={value === v}
              onClick={() => onChange(v)}
            />
            {`${numeral(v / 100).format('0%')}`}
          </label>
        </div>
      ))}
    </div>
  )
}

import iconDollar from '@/assets/images/icon-dollar.svg'
import NumberInput from '@/components/NumberInput'

interface Props {
  id: string
  onChange: (value: number) => void
}

export default function MoneyInput({ id, onChange }: Props) {
  return (
    <NumberInput
      id={id}
      icon={iconDollar}
      onChange={onChange}
      numberType="float"
      placeholder="0"
    />
  )
}

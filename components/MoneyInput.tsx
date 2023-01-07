import iconDollar from '@/assets/images/icon-dollar.svg'
import NumberInput from '@/components/NumberInput'
import { InputHTMLAttributes } from 'react'

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'type' | 'placeholder'
  > {
  hasError?: boolean
}

export default function MoneyInput({ hasError, ...attrs }: Props) {
  return (
    <NumberInput
      {...attrs}
      icon={iconDollar}
      numberType="float"
      placeholder="0"
      hasError={hasError}
    />
  )
}

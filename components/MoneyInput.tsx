import iconDollar from '@/assets/images/icon-dollar.svg'
import NumberInputWithIcon from '@/components/NumberInputWithIcon'
import { InputHTMLAttributes } from 'react'

interface Props
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'type' | 'placeholder'
  > {
  id: string
  hasError?: boolean
}

export default function MoneyInput({ hasError, id, ...attrs }: Props) {
  return (
    <NumberInputWithIcon
      id={id}
      {...attrs}
      icon={iconDollar}
      numberType="float"
      placeholder="0"
      hasError={hasError}
    />
  )
}

import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'

interface RootProps extends Select.SelectProps {
  children: ReactNode
}

export function Root({ children, ...rest }: RootProps) {
  return <Select.Root {...rest}>{children}</Select.Root>
}

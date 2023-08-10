import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'

type ContentProps = Select.SelectContentProps & {
  children: ReactNode
}

export function Content({ children, ...rest }: ContentProps) {
  return (
    <Select.Portal>
      <Select.Content
        side="bottom"
        position="popper"
        sideOffset={8}
        className="z-10 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
        {...rest}
      >
        <Select.Viewport>{children}</Select.Viewport>
      </Select.Content>
    </Select.Portal>
  )
}

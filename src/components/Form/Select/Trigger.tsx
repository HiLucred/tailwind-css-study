import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

export type TriggerProps = Select.SelectTriggerProps & {
  placeholder: string
}

export function Trigger({ placeholder, ...rest }: TriggerProps) {
  return (
    <Select.Trigger
      className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:opacity-60"
      {...rest}
    >
      <Select.Value placeholder={placeholder} className="text-black" />

      <Select.Icon>
        <ChevronDown className="h-5 w-5 text-zinc-500" />
      </Select.Icon>
    </Select.Trigger>
  )
}

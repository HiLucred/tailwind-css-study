import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type ItemProps = Select.SelectItemProps & {
  title: string
}

export function Item({ title, ...rest }: ItemProps) {
  return (
    <Select.Item
      className="justify-betweenitems-center flex w-[--radix-select-trigger-width] items-center gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...rest}
    >
      <Select.ItemText className="text-black">{title}</Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}

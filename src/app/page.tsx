'use client'

import * as Input from '@/components/Input'
import * as FileInput from '@/components/Form/FileInput'
import { SettingsTabs } from '@/components/SettingsTabs'
import * as Select from '@/components/Form/Select'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { TextArea } from '@/components/TextArea'

export default function Home() {
  return (
    <>
      <h1>Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col border-b border-zinc-200 pb-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>

            <span className="text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <form
        action=""
        id="settings"
        className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>

          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Gabriel" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Lucas" />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="email" className="text-sm font-medium text-zinc-700">
            E-mail Address
          </label>

          <Input.Root>
            <Input.Prefix>
              <Mail className="h-5 w-5 text-zinc-500" />
            </Input.Prefix>
            <Input.Control id="email" defaultValue="Gabriel" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="photo" className=" text-sm font-medium text-zinc-700">
            Your Photo
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              This will be displayed on your profile
            </span>
          </label>

          <FileInput.Root className="flex items-start gap-5">
            <FileInput.ImagrePreview />
            <FileInput.Trigger />
            <FileInput.Control />
          </FileInput.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="role" className="text-sm font-medium text-zinc-700">
            Role
          </label>

          <Input.Root>
            <Input.Control id="role" defaultValue="CTO" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="country"
            className="text-sm font-medium text-zinc-700"
          >
            Country
          </label>

          <Select.Root>
            <Select.Trigger placeholder="Select your country" />

            <Select.Content>
              <Select.Item value="br" title="Brazil" />
              <Select.Item value="us" title="United States" />
              <Select.Item value="jp" title="Japan" />
              <Select.Item value="fr" title="France" />
              <Select.Item value="cb" title="Colombiam" />
              <Select.Item value="ch" title="Chile" />
              <Select.Item value="ur" title="Uruguay" />
            </Select.Content>
          </Select.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="timezone"
            className="text-sm font-medium text-zinc-700"
          >
            Timezone
          </label>

          <Select.Root>
            <Select.Trigger placeholder="Select your timezone" />

            <Select.Content>
              <Select.Item
                value="utc8"
                title="Pacific Standard Time (UTC-08:00)"
              />
              <Select.Item value="utc3" title="America São Paulo (UTC-03:00)" />
            </Select.Content>
          </Select.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label htmlFor="bio" className=" text-sm font-medium text-zinc-700">
            Bio
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Write a short introduction.
            </span>
          </label>

          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Select.Root defaultValue="normal">
                <Select.Trigger placeholder="" />

                <Select.Content>
                  <Select.Item title="Normal Text" value="normal" />
                  <Select.Item title="Mark Down" value="md" />
                </Select.Content>
              </Select.Root>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>

                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>

                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>

                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                </button>

                <button
                  type="button"
                  className="rounded-md p-2 hover:bg-zinc-50"
                >
                  <ListOrdered
                    className="h-4 w-4 text-zinc-500"
                    strokeWidth={3}
                  />
                </button>
              </div>
            </div>

            <TextArea
              id="bio"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UI/UX design, brand strategy, and WebFlow development"
            />
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label
            htmlFor="projects"
            className=" text-sm font-medium text-zinc-700"
          >
            Portfolio projects
            <span className="mt-0.5 block text-sm font-normal text-zinc-500">
              Share a few snippets of your work.
            </span>
          </label>

          <FileInput.Root>
            <FileInput.Trigger />
            <FileInput.Control multiple />
            <FileInput.FileList />
          </FileInput.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <button
            type="button"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
          >
            Save
          </button>
        </div>
      </form>
    </>
  )
}

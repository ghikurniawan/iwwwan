import Section from '@/components/shared/Section'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Layout({children} : {children : React.ReactNode}) {
  return (
    <Section className="py-20 space-y-4 flex-initial min-h-screen">
        <h2 className="text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">Blog</h2>
        <p className='text-muted-foreground'>Thoughts, mental models, and tutorials about front-end development.</p>
        <Input type='text' placeholder='Search...' />
          <div className='inline-flex h-6 text-sm'>
              <p className="block">
                Choose topic:
              </p>
              <div className="flex flex-wrap gap-2 ml-2">
                  <Badge variant={'secondary'}>Tag1</Badge>
                  <Badge variant={'secondary'}>Tag2</Badge>
                  <Badge variant={'secondary'}>Tag3</Badge>
                  <Badge variant={'secondary'}>Tag4</Badge>
                  <Badge variant={'secondary'}>Tag5</Badge>
              </div>
          </div>
          <div className="w-full flex justify-end">
            <ShortPost />
          </div>
        {children}
    </Section>
  )
}


const ShortPost = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Short blog" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Latest Posts</SelectItem>
          <SelectItem value="banana">Newest Posts</SelectItem>
          <SelectItem value="blueberry">Most popular posts</SelectItem>
          <SelectItem value="grapes">By like count</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
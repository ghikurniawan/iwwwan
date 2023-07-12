import React from 'react'
import Section from '../shared/Section'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { ClockIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'

export const FeaturedPosts = () => {
  return (
    <Section className="py-20 space-y-4">
        <h2 className="text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">Featured Posts</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div>
          <Link href={'/blog'} aria-label='see more post'>
            <Button variant={'outline'} size={'lg'}>
              See more post
            </Button>
          </Link>
        </div>
    </Section>
  )
}

const Post = () => {
  return (
    <Card className="group transition-all overflow-hidden hover:scale-105 bg-card w-full relative">
      <Link href={'/'} className="inset-0 absolute w-full h-full"></Link>
        <AspectRatio ratio={16/9} className="relative">
            <Image 
                src={'https://source.unsplash.com/random/?abstract,space'} 
                alt="thumbnail" 
                fill 
                className="rounded-md object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute bottom-2 right-2 flex gap-2 h-6">
              <Badge variant={'secondary'} className="text-muted-foreground">
                tag
              </Badge>
              <Badge variant={'secondary'} className="text-muted-foreground">
                tag
              </Badge>
            </div>
        </AspectRatio>
        <CardHeader className="space-y-6">
          <CardTitle>Back To Basic: Mental Model to Understand Flexbox</CardTitle>
          <div className="flex gap-4">
            <Badge variant={'secondary'} className="pl-0 bg-inherit text-muted-foreground">
              <ClockIcon className="mr-2" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
                6 min read
              </span>
            </Badge>
            <Badge variant={'secondary'} className="pl-0 bg-inherit text-muted-foreground">
              <EyeOpenIcon className="mr-2" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">
                7.750 Views
              </span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent >
          <CardTitle>July 19, 2021</CardTitle>
          <p className="mt-4">
          These are the mental models that I use to really understand flexbox, and I hope these can help you to understand too.
          </p>
        </CardContent>
    </Card>
  )
}
import React from 'react'
import Section from '../shared/Section'
import Link from 'next/link'
import { Button } from '../ui/button'
import ProjectCard from '../project/ProjectCard'

export const FeaturedProject = () => {
  return (
    <Section className="py-20 space-y-4">
        <h2 className="text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">Featured Project</h2>
        <p className='text-muted-foreground text-lg'>Some projects that I&apos;m proud of</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div>
            <Link href={'/project'} aria-label='see more post'>
                <Button variant={'outline'} size={'lg'}>
                See more project
                </Button>
            </Link>
        </div>
    </Section>
  )
}
import Section from '@/components/shared/Section'
import React from 'react'

export default function Layout({children} : {children : React.ReactNode}) {
  return (
    <Section className="py-20 space-y-4 flex-initial min-h-screen">
        <h2 className="text-4xl my-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-pink via-purple-500 to-cyan-600">Library</h2>
        <p className='text-muted-foreground'>Some collection of code snippets that I put for easy access, feel free to reuse!</p>
        {children}
    </Section>
  )
}

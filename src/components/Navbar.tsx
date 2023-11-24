'use client'
import { Github, Linkedin } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

export function Navbar() {
  return (
    <div className="flex items-center h-14 justify-around shadow-xl">
      <h1 className="font-semibold text-lg">Marciel felipe</h1>
      <div className="flex gap-1">
        <Link href="https://github.com/marcielfelipe" target="_blank">
          <Button variant="ghost">
            <Github />
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/marciel-felipe-028470160"
          target="_blank"
        >
          <Button variant="ghost">
            <Linkedin />
          </Button>
        </Link>
      </div>
    </div>
  )
}

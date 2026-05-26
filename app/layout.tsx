import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deep Work Guardian — Block Slack During Focus Sessions',
  description: 'Browser extension that blocks Slack and Discord during deep work sessions with smart urgency detection. Built for remote developers and knowledge workers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c2ad85e9-a344-40f6-ac3f-c4405c865e34"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}

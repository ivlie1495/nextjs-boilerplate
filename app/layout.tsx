import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { theme } from './theme'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Notes App',
  description:
    'A beautiful notes application built with Next.js, Prisma, and Material UI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="sticky" elevation={1}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                My App
              </Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{ bgcolor: 'grey.50', minHeight: 'calc(100vh - 64px)' }}
          >
            <Container maxWidth="lg" sx={{ py: 4 }}>
              {children}
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BlueAnts | Hormigas y Hormigueros Profesionales',
  description: 'Tu tienda especializada en colonias de hormigas vivas y hormigueros profesionales. Especies para principiantes y expertos. Envíos a todo México con garantía de llegada viva.',
  keywords: ['hormigas', 'hormigueros', 'colonias de hormigas', 'mirmecología', 'mascotas exóticas', 'México', 'formicarios'],
  openGraph: {
    title: 'BlueAnts | Hormigas y Hormigueros Profesionales',
    description: 'Tu tienda especializada en colonias de hormigas vivas y hormigueros profesionales.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'BlueAnts',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background" suppressHydrationWarning>
      <body className={`${geist.className} ${geistMono.className} font-sans antialiased`}>
        <div className="relative w-full h-[60px] md:h-[80px] bg-black overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/placeholder.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src="/videos/banner.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary/30 to-accent/30">
            <p className="text-white text-sm md:text-base font-medium tracking-wide drop-shadow-md">
              🐜 Envíos a todo México — Garantía de llegada viva
            </p>
          </div>
        </div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

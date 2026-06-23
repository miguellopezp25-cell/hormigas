import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Imperio Hormiga | Hormigas y Hormigueros Profesionales',
  description: 'Tu tienda especializada en colonias de hormigas vivas y hormigueros profesionales. Especies para principiantes y expertos. Envíos a todo México con garantía de llegada viva.',
  keywords: ['hormigas', 'hormigueros', 'colonias de hormigas', 'mirmecología', 'mascotas exóticas', 'México', 'formicarios'],
  openGraph: {
    title: 'Imperio Hormiga | Hormigas y Hormigueros Profesionales',
    description: 'Tu tienda especializada en colonias de hormigas vivas y hormigueros profesionales.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Imperio Hormiga',
  },
  icons: {
    icon: [
      {
        url: '/images/imperiologo.png',
      },
    ],
    apple: '/images/imperiologo.png',
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
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-red-900/50 to-amber-900/50">
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

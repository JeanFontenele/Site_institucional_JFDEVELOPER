import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#010C2B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jfdeveloper.com.br'),
  title: 'JFDeveloper | Soluções Tecnológicas e Inteligência Artificial',
  description: 'Desenvolvemos sites, sistemas e soluções digitais sob medida para empresas que desejam melhorar seus processos, presença digital e resultados.',
  keywords: [
    'JFDeveloper',
    'Desenvolvimento de software',
    'Soluções web',
    'Automação de processos',
    'Inteligência Artificial',
    'Sistemas sob medida',
    'Next.js',
    'React',
    'APIs'
  ],
  authors: [{ name: 'JFDeveloper' }],
  icons: {
    icon: '/logo/Logo_JFDEVELOPER.png',
    apple: '/logo/Logo_JFDEVELOPER.png',
  },
  openGraph: {
    title: 'JFDeveloper | Soluções Tecnológicas e Inteligência Artificial',
    description: 'Soluções digitais para transformar ideias em tecnologia. Sites, sistemas, automações e IA sob medida.',
    url: 'https://jfdeveloper.com.br',
    siteName: 'JFDeveloper',
    images: [
      {
        url: '/logo/Logo_JFDEVELOPER.png',
        width: 800,
        height: 800,
        alt: 'JFDeveloper - Soluções Tecnológicas e Inteligência Artificial',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#010C2B] text-[#F1F5F9] font-[family-name:var(--font-inter)] antialiased flex flex-col justify-between" cz-shortcut-listen="true">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

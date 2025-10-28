import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import 'primeicons/primeicons.css';

export const metadata = {
    metadataBase: new URL('https://www.grinko.co.uk'),
    title: {
        default: 'Grinko Cleaning Services',
        template: '%s | Grinko Cleaning Services',
    },
    description: 'Professional cleaning services for homes and offices across the UK. Book online today!',
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        url: 'https://www.grinko.co.uk',
        siteName: 'Grinko Cleaning Services',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@grinko',
        title: 'Grinko Cleaning Services',
        description: 'Book trusted and affordable cleaning services in your area.',
    },
    alternates: {
        canonical: 'https://www.grinko.co.uk',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-gray-100">
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    )
}

import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import 'primeicons/primeicons.css';

export const metadata = {
    title: 'Grinko Cleaning Services',
    description: 'Professional Cleaning for Homes and Businesses',
    icons: {
        icon: '/favicon.png', // This sets the favicon
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

// app/layout.js
import './globals.css'

export const metadata = {
    metadataBase: new URL('https://www.grinko.co.uk'),
    title: {
        default: 'Grinko Cleaning Services',
        template: '%s | Grinko Cleaning Services',
    },
    description: 'Professional cleaning services for homes and offices across the UK. Book online today!',
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
        <body>{children}</body>
        </html>
    )
}

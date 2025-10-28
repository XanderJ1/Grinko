import CareersComponent from '@/components/CareersComponent'

export const metadata = {
    title: 'Careers | Grinko Cleaning Services UK',
    description:
        'Join Grinko Cleaning Services and build a rewarding career in professional home and office cleaning. Explore current job openings and growth opportunities across the UK.',
    keywords:
        'grinko cleaning careers, cleaning jobs UK, cleaning employment, professional cleaners UK, join grinko, cleaning company hiring, cleaning staff jobs',
    alternates: {
        canonical: 'https://www.grinko.co.uk/careers',
    },
    openGraph: {
        title: 'Careers at Grinko Cleaning Services',
        description:
            'Looking for cleaning jobs in the UK? Join Grinko Cleaning Services and become part of a trusted professional cleaning team.',
        url: 'https://www.grinko.co.uk/careers',
        siteName: 'Grinko Cleaning Services',
        images: [
            {
                url: '/images/careers-banner.jpg', // Replace with your real banner
                width: 1200,
                height: 630,
                alt: 'Grinko Cleaning Careers Banner',
            },
        ],
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Grinko Cleaning Careers',
        description:
            'Join the Grinko Cleaning team — build a fulfilling cleaning career in the UK with growth opportunities.',
        images: ['/images/careers-banner.jpg'],
    },
}

export default function Careers() {
    return (
        <main className="bg-gray-50 min-h-screen py-10">
            <section className="container mx-auto px-4">
                <CareersComponent />
            </section>
        </main>
    )
}

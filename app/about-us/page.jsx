import AboutUs from '@/components/About Us'

export const metadata = {
    title: 'About Us | Grinko Cleaning Services UK',
    description:
        'Discover Grinko Cleaning Services — your trusted partner for professional home and office cleaning in the UK. Learn about our mission, vision, and dedicated team.',
    keywords:
        'grinko cleaning, cleaning company UK, home cleaning, office cleaning, about grinko, eco-friendly cleaning, janitorial services',
    alternates: {
        canonical: 'https://www.grinko.co.uk/about-us',
    },
    openGraph: {
        title: 'About Grinko Cleaning Services | Professional Cleaning in the UK',
        description:
            'At Grinko Cleaning Services, we provide professional, eco-friendly cleaning for homes and offices across the UK. Learn about our team and mission.',
        url: 'https://www.grinko.co.uk/about-us',
        siteName: 'Grinko Cleaning Services',
        images: [
            {
                url: '/images/group.jpg',
                width: 1200,
                height: 630,
                alt: 'Grinko Cleaning Team',
            },
        ],
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Grinko Cleaning Services UK',
        description:
            'We provide eco-friendly professional cleaning for homes and businesses across the UK.',
        images: ['/images/group.jpg'],
    },
}

export default function AboutUsPage() {
    return (
        <main className="bg-gray-50 min-h-screen py-10">
            <section className="container mx-auto px-4">
                <AboutUs />
            </section>
        </main>
    )
}

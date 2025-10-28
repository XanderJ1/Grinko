import Hero from '@/components/Hero'
import OurServices from '@/components/OurServices'
import Testimonials from '@/components/Testimonials'
import Footer from "@/components/Footer";

export const metadata = {
    title: 'Home | Grinko Cleaning Services',
    description: 'Professional cleaning services for homes and businesses across the UK. Trusted, reliable, and eco-friendly cleaning you can count on.',
    alternates: {
        canonical: 'https://www.grinko.co.uk',
    },
    openGraph: {
        title: 'Grinko Cleaning Services - Trusted Cleaning for Homes & Businesses',
        description: 'Book reliable home and office cleaning services in the UK. Trusted, professional, and eco-friendly.',
        url: 'https://www.grinko.co.uk',
        siteName: 'Grinko Cleaning Services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Grinko Cleaning Services',
        description: 'Professional cleaning services for homes and offices across the UK. Book today!',
    },
}

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Hero />
            <section aria-labelledby="services-heading">
                <h2 id="services-heading" className="sr-only">
                    Our Services
                </h2>
                <OurServices />
            </section>
            <section aria-labelledby="testimonials-heading">
                <h2 id="testimonials-heading" className="sr-only">
                    Testimonials
                </h2>
                <Testimonials />
            </section>
            <Footer />
        </main>
    )
}

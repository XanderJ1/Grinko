import BookingForm from "@/components/BookingForm";

export const metadata = {
    title: 'Book Cleaning Service | Grinko Cleaning Services UK',
    description:
        'Easily book professional cleaning services with Grinko. Choose your preferred time, location, and service type for a spotless home.',
    alternates: {
        canonical: 'https://www.grinko.co.uk/book-cleaning',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Book Cleaning Service | Grinko Cleaning Services UK',
        description:
            'Book professional home and office cleaning services with Grinko across the UK.',
        url: 'https://www.grinko.co.uk/book-cleaning',
        siteName: 'Grinko Cleaning Services',
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Book Cleaning Service | Grinko',
        description:
            'Easily book professional cleaning services with Grinko. Choose your preferred time, location, and service type for a spotless home.',
    },
}

export default function BookCleaningPage() {
    return (
        <main className="bg-gray-100 min-h-screen py-8">
            <h1 className="sr-only">Book a Cleaning Service</h1>
            <div className="container mx-auto px-4">
                <BookingForm />
            </div>
        </main>
    )
}

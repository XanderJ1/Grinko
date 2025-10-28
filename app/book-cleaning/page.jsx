import BookingForm from '@/components/BookingForm'
import Head from 'next/head'

export default function BookCleaningPage() {
    return (
        <>
            <Head>
                <title>Book Cleaning Service | Grinko</title>
                <meta
                    name="description"
                    content="Easily book professional cleaning services with Grinko. Choose your preferred time, location, and service type for a spotless home."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.grinko.co.uk/book-cleaning" />
            </Head>

            <main className="bg-gray-100 min-h-screen py-8">
                <h1 className="sr-only">Book a Cleaning Service</h1>
                <BookingForm />
            </main>
        </>
    )
}

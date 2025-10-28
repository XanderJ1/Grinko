import React from 'react'

export const AboutUsCard = ({message, icon, title}) => {
    return (
        <div className="flex flex-col border border-gray-400 p-8 rounded-2xl">
            <i className={`pi ${icon} text-2xl text-green-600 mb-2` }></i>
            <h1 className="text-2xl">{title}</h1>
            <h1 className="">{message} </h1>
        </div>
    )
}


export const LeaderShipCard = ({image, role, message}) => {
    return (
        <div>
            <div className="flex flex-col border ma border-gray-500 rounded-2xl p-4 gap-5">
                <div className="">
                    <img className="h-100 w-100" src={image} alt="Leader Ship" />
                </div>
                <h1 className="font-bold">{role}</h1>
                <h2 className="">{message}</h2>
            </div>
        </div>
    )
}


const AboutUs = () => {
    const values = [
        {
            icon: 'pi-shield',
            title: 'Reliability',
            description: 'You can count on us to show up on time, every time, with consistent quality service you can trust.'
        },
        {
            icon: 'pi-heart',
            title: 'Care & Attention',
            description: 'We treat your space as if it were our own, paying attention to every detail that matters to you.'
        },
        {
            icon: 'pi-leaf',
            title: 'Eco-Friendly',
            description: 'We use environmentally safe products that are effective for cleaning but gentle on your family and pets.'
        },
        {
            icon: 'pi-star',
            title: 'Excellence',
            description: 'We strive for perfection in every cleaning, ensuring your complete satisfaction with our service.'
        }
    ];

    const team = [
        {
            name: 'Sarah Mensah',
            role: 'Founder & CEO',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b3a4?w=400&h=400&fit=crop&crop=face',
            description: 'With over 8 years in the cleaning industry, Sarah founded Grinko to bring professional, reliable cleaning services to homes and businesses across the UK.'
        },
        {
            name: 'Michael Asante',
            role: 'Operations Manager',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
            description: 'Michael ensures our operations run smoothly and our team maintains the highest standards of service quality and customer satisfaction.'
        },
        {
            name: 'Grace Osei',
            role: 'Quality Supervisor',
            image: '/images/side-view-adult-male-disinfecting.jpg',
            description: 'Grace oversees our quality control processes, ensuring every cleaning meets our exacting standards before we consider the job complete.'
        }
    ];

    const services = [
        { icon: 'pi-home', title: 'Residential Cleaning', description: 'Complete home cleaning solutions' },
        { icon: 'pi-briefcase', title: 'Commercial Cleaning', description: 'Professional office and business cleaning' },
        { icon: 'pi-refresh', title: 'Deep Cleaning', description: 'Thorough, detailed cleaning services' },
        { icon: 'pi-calendar', title: 'Recurring Services', description: 'Regular scheduled cleaning maintenance' }
    ];


    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-4xl text-center mb-6">About Grinko Cleaning Services</h1>
            <div className="flex flex-col-reverse md:flex-row justify-center px-2">
                <div className="flex flex-col justify-center mr-10 gap-4">
                    <h1 className="font-bold text-xl text-start mt-4">
                        Your Trusted Cleaning Experts</h1>
                    <p className="text-xl">
                        At Grinko, we provide professional cleaning services tailored for both homes and businesses Our mission is simple — to create spotless, welcoming spaces so you can focus on what matters most.

                        With a dedicated team committed to reliability, care, and attention to detail, we go beyond cleaning — we bring peace of mind.</p>
                </div>

                <img className="w-full md:w-1/2 h-100 rounded-2xl" src="/images/group.jpg"/>
            </div>
            <div className="flex flex-col gap-5 my-12 px-2">
                <h1 className="text-4xl">Our Story</h1>
                <p className="text-gray-600 leading-8">Grinko was born from a simple belief: everyone deserves to come home to a clean, healthy space without the stress of doing it themselves. Founded in 2019 by Prince Brako, our journey began when she recognized the growing need for reliable, professional cleaning services in Reading's busy urban landscape.
                    What started as a small team of dedicated cleaners has grown into one of Reading's most trusted cleaning service providers. We've built our reputation one satisfied customer at a time, always putting quality, reliability, and customer satisfaction at the heart of everything we do.
                    Today, we're proud to serve hundreds of families and businesses across UK, providing them with the peace of mind that comes from knowing their spaces are in caring, professional hands.
                </p>
                <img className={"h-100 rounded-2xl"} src="/images/teamm.webp"  alt={"A boy"}/>

                {/* Mission & Vision */}
                <section className="py-20  flex flex-col">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16 flex flex-col">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Driving our commitment to excellence in every cleaning service we provide
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:flex flex-col gap-12">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="bg-green-100 p-3 rounded-full mr-4">
                                        <i className="pi pi-bullseye text-green-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To provide exceptional, reliable cleaning services that give our clients more time
                                    to focus on what matters most to them. We're committed to creating healthier,
                                    cleaner environments using eco-friendly practices while building lasting
                                    relationships based on trust and excellence.Our mission is to be the leading national
                                    innovator, developer and provider of quality
                                    cleaning, sanitation and home maintenance
                                    services to households and offices in UK in a
                                    trustworthy and professional manner. We exist
                                    to attract and maintain customers. As a team,
                                    we will achieve aggressive growth and fair
                                    return for our shareholders. We will
                                    accomplish this by exceeding the expectations
                                    of our customers by providing them with well-
                                    groomed professional housekeepers.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="bg-green-100 p-3 rounded-full mr-4">
                                        <i className="pi pi-eye text-green-600 text-2xl"></i>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    The vision of Grinko Company Limited is to
                                    become the leading provider of affordable and
                                    quality Janitorial services to offices and
                                    households in the UK and across the globe.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="flex flex-col mt-8">
                    <h1 className="text-4xl">Our Values</h1>
                    <p className="text-gray-600 mt-4 mb-8">The principles that guide everything we do and define who we are as a company</p>

                    <div className="flex flex-col md:flex-row gap-5 mb-8">
                        {values.map((value, index) => (
                            <AboutUsCard
                                key={index}
                                icon={value.icon}
                                title={value.title}
                                message={value.description} />
                        ))}
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-5">
                <h1 className="text-3xl">Meet our Dedicated Team</h1>

            </div>
        </div>
    )
}
export default AboutUs

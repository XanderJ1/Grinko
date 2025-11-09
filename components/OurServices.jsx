import React from "react";
import Image from "next/image";

export const Card = ({ title, message, image }) => {
    return (
        <div className="border items-center border-gray-400 rounded-xl p-4 mb-8">
            <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="h-[400px] w-full rounded-xl object-cover"
            />
            <h1 className="text-xl font-bold my-2">{title}</h1>
            <p>{message}</p>
        </div>
    );
};

const BgCard = ({ title, message, image }) => {
    return (
        <div className="w-full md:w-1/3 min-h-[400px] rounded-xl relative overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-xl"
                priority
            />
            <div className="absolute bottom-0 bg-black/50 text-white p-4">
                <h1 className="text-xl font-bold my-2">{title}</h1>
                <p>{message}</p>
            </div>
        </div>
    );
};

const Reason = ({ image, message }) => {
    return (
        <div className="flex gap-2 items-center">
            <Image src={image} alt={message} width={32} height={32} />
            <p>{message}</p>
        </div>
    );
};

const BgCardSmall = ({ title, message, image }) => {
    return (
        <div className="w-full h-1/2 flex flex-col justify-end relative rounded-xl overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-xl"
            />
            <div className="absolute bottom-0 bg-black/40 text-white p-3">
                <h1 className="text-xl font-bold my-2">{title}</h1>
                <p>{message}</p>
            </div>
        </div>
    );
};

const OurServices = () => {
    return (
        <div className="max-w-7xl mx-auto mt-12">
            <h3 id="services" className="text-xl font-bold text-center">
                Our Services
            </h3>
            <h1 className="text-3xl text-center">
                Our One Stop Cleaning Solutions
            </h1>
            <p className="text-center text-gray-500 max-w-3xl mx-auto mb-8">
                We offer a wide variety of professional cleaning services tailored to
                meet your unique needs, whether for your home or office.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-2 px-2">
                <Card
                    title="Deep Cleaning"
                    message="For those times when your home needs more than just a surface clean, we offer deep through a detailed approach."
                    image="/images/deepcleaning.jpg"
                />
                <Card
                    title="Carpet & Upholstery Cleaning"
                    message="Refresh your carpets and upholstery with our deep cleaning techniques that remove dirt, allergens, and stains, leaving your home fresh and healthy."
                    image="/images/uphol.jpg"
                />
                <Card
                    title="Office Cleaning"
                    message="Create a healthier, more productive workplace with our reliable office cleaning tailored to your business needs."
                    image="/images/professional-cleaning-service-person-cleaning-office.jpg"
                />
                <Card
                    title="Home Cleaning"
                    message="Consistent and dependable cleaning that keeps your living spaces comfortable, welcoming, and sparkling clean."
                    image="/images/pexels-cottonbro-4107286.jpg"
                />
                <Card
                    title="Airbnb Cleaning"
                    message="Ensure a 5-star guest experience with our thorough Airbnb cleaning service, leaving every space spotless and guest-ready."
                    image="/images/airbnb.jpg"
                />
                <Card
                    title="Move-In / Move-Out Cleaning"
                    message="Make moving stress-free with a detailed cleaning that ensures your old space is spotless and your new home is move-in ready."
                    image="/images/moveout.jpg"
                />
            </div>

            <div>
                <h1 className="text-4xl text-center my-5">Why Choose Us</h1>
                <div className="flex flex-col md:flex-row my-8 justify-center px-2">
                    <BgCard
                        image="/images/nicehouse2.jpg"
                        title="cleaned house"
                    />
                    <div className="hidden md:flex flex-col mx-4 gap-3 w-full md:w-1/3">
                        <BgCardSmall
                            image="/images/nicehouse1.jpg"
                            title="Professional Cleaning"
                        />
                        <BgCardSmall
                            image="/images/nicehouse3.jpg"
                            title="Reliable Cleaning"
                        />
                    </div>

                    <div className="flex flex-col mt-8 mx-6 gap-5">
                        <h2 className="text-4xl text-center space-x-8 md:text-start leading-9 max-w-xl">
                            Why Clients Love Our Cleaning Services
                        </h2>
                        <p className="text-gray-500 max-w-xl my-2">
                            Choosing the right cleaning service matters. That's why we focus
                            on delivering unparalleled quality, reliability, and care. Using
                            eco-friendly products, offering flexible scheduling, and
                            transparent pricing.
                        </p>
                        <div className="grid grid-cols-2 justify-center gap-5">
                            <Reason
                                message="Experienced and Reliable"
                                image="/images/reshot-icon-professional-qualification-6N3EAGJPUR.svg"
                            />
                            <Reason
                                message="Flexible Scheduling"
                                image="/images/reshot-icon-schedule-planning-6PFELK8MWA.svg"
                            />
                            <Reason
                                message="Eco-Friendly Products"
                                image="/images/environmentalism.png"
                            />
                            <Reason
                                message="Transparent Pricing"
                                image="/images/fair-trade.png"
                            />
                        </div>
                        <div className="flex items-center gap-8">
                            <a
                                href="/about-us"
                                className="font-bold text-green-600 border w-fit px-3 py-1 border-black rounded-2xl"
                            >
                                Learn more
                            </a>
                            <a
                                href="tel:+447858860101"
                                className="flex items-center gap-2 text-xl"
                            >
                                <i className="pi pi-phone"></i>+447858860101
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;

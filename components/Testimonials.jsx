import React from 'react'

export const TestimonialCard = ({name, location, rating, message, image}) => {

    const  filledStars = Array(rating).fill(0);
    const unfilledStars = Array(5 - rating).fill(0);
    return (
        <div className="flex flex-col  border shadow-lg border-gray-500 p-8 hover:-translate-y-3 hover:transition-transform rounded-lg md:w-100 hover:shadow-xl transition-shadow duration-300">

            <div className="flex justify-center">
                <img src={image} className=" w-30 h-30 rounded-full" /></div>
            <h3 className="font-bold py-3 text-center">{name}</h3>
            <p className="text-center  text-gray-400">{location}</p>
            <div className="flex justify-center py-3">
                {filledStars.map((_, index) => (
                    <i key={`filled- ${index}`} className="pi pi-star-fill text-yellow-500 text-xl mr-1"></i>
                ))
                }
                {unfilledStars.map((index) => (
                    <i key={index} className="pi pi-star text-xl mr-1"></i>
                ))
                }
            </div>
            <p className="text-center">{message}</p>

        </div>
    )
}


const Testimonials = () => {
    
    return (
        <>
            <h1 className={"text-center text-3xl py-8"}>What Our Clients Are Saying</h1>
        <div className="flex flex-col px-2 md:flex-row justify-center gap-5 max-w-7xl mx-auto">
            <TestimonialCard
                name={"Margaret A. Aten"}
                rating={5}
                message={"The team did a fantastic job! My home has never looked this spotless. They were thorough, professional, and right on time. Highly recommend their service!"}
                location={"Durham"}
                image="/images/testimonial1.jpg"

            />
            <TestimonialCard
                name={"Crystal J. Brown"}
                rating={4}
                message={"Great cleaning service at a very reasonable price. The staff were friendly and efficient, leaving my office space fresh and organized."}
                location={"Yorkshire"}
                image="/images/testimonial3.jpg"
            />
            <TestimonialCard
                name={"Sharon A. Hutton"}
                rating={5}
                message={"I booked them for a deep clean before hosting guests, and the results were amazing. Attention to detail was outstanding – even corners I never thought about were spotless!"}
                location={"Crewe"}
                image="/images/testimonial2.jpg"
            />
        </div>
            </>
    )
}
export default Testimonials

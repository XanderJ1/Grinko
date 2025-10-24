import React from 'react'
import Link from 'next/link';

const Hero = () => {
    return (
        <div>

            <div className="flex flex-col-reverse md:flex-row mx-auto justify-between max-w-7xl gap-8 mb-10">
                <div className="flex flex-col text-center md:text-start justify-center">
                    <h1 className="flex font-bold justify-center md:justify-start text-2xl text-gray-500">
                        <i className="pi pi-clock mr-2 "></i>
                        Open <span className="text-black text-xl ml-2"> 24/7</span>
                    </h1>
                    <h1 className="flex flex-col font-semibold text-5xl leading-12 mt-8">
                        <span>Professional Cleaning</span>
                        <span>Services for <span className="text-green-600">Homes</span> and</span>
                        <span className="text-green-600">Businesses</span>
                    </h1>
                    <div className="flex flex-col">
                        <p className="text-gray-600 my-2 mx-auto max-w-xl">Your trusted cleaning team is here to handle your cleaning
                            <span> needs tailored to keep your business or home spotless.
                                just when you need it.</span>
                        </p>

                        <div className="flex justify-center md:justify-start gap-5">
                            <Link href={"/book-cleaning"} className="bg-green-600 self-center md:self-auto text-white my-2 px-6 py-3 w-fit rounded-2xl hover:bg-green-700 transition-transform hover:scale-110">
                                Book Now
                            </Link>
                            <a href={"tel:+447858860101"} className="bg-green-600 self-center md:self-auto text-white my-2 px-6 py-3 w-fit rounded-2xl hover:bg-green-700 transition-transform hover:scale-110">
                                Call now
                            </a>
                        </div>


                    </div>
                </div>
                <div className="">
                    <img className="rounded-2xl w-full px-2" src="/images/blue_apron.jpg" alt="green image" />
                </div>
            </div>
        </div>
    )
}
export default Hero

// components/OpeningHours.jsx
import React from "react";

const OpeningHours = () => {
    return (
        <section
            id="opening-hours"
            className="bg-white py-16 border-t border-gray-200 text-center"
        >
            <h2 className="text-4xl mb-8 font-semibold mb-4"> <i className="pi pi-clock mr-1 text-gray-500"></i> Opening Hours</h2>
            <ul className="space-y-2 text-gray-700">
                <li className="text-xl">Monday: Open 24 hours</li>
                <li className="text-xl">Tuesday: Open 24 hours</li>
                <li className="text-xl">Wednesday: Open 24 hours</li>
                <li className="text-xl">Thursday: Open 24 hours</li>
                <li className="text-xl">Friday: Open 24 hours</li>
                <li className="text-xl">Saturday: Open 24 hours</li>
                <li className="text-xl">Sunday: Open 24 hours</li>
            </ul>
        </section>
    );
};

export default OpeningHours;

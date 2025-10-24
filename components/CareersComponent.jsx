"use client";
import React, { useState } from 'react';
import emailJs from "emailjs-com";

const CareersComponent = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [showApplication, setShowApplication] = useState(false);
    const [applicationData, setApplicationData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        availability: '',
        coverLetter: ''
    });

    const jobOpenings = [
        {
            id: 1,
            title: 'Cleaning Specialist',
            type: 'Full-time / Part-time',
            location: 'Reading, England',
            salary: 'GBP 500 - 700/month',
            description: 'Join our team of professional cleaners and help maintain beautiful, healthy spaces for our clients.',
            requirements: [
                'Previous cleaning experience preferred',
                'Attention to detail and quality focus',
                'Reliable transportation',
                'Ability to work independently',
                'Physical fitness for cleaning tasks',
                'Good communication skills'
            ]
        },
        {
            id: 2,
            title: 'Team Supervisor',
            type: 'Full-time',
            location: 'Reading, England',
            salary: 'GBP 500 - 700/month',
            description: 'Lead our cleaning teams and ensure exceptional service delivery across all client locations.',
            requirements: [
                '2+ years cleaning industry experience',
                'Leadership and team management skills',
                'Strong organizational abilities',
                'Valid driver\'s license',
                'Excellent communication skills',
                'Problem-solving capabilities'
            ]
        },
        {
            id: 3,
            title: 'Customer Service Representative',
            type: 'Full-time',
            location: 'Reading, England',
            salary: 'GBP 600 - 800/month',
            description: 'Be the voice of our company, helping customers schedule services and ensuring their satisfaction.',
            requirements: [
                'High school diploma or equivalent',
                'Excellent communication skills',
                'Customer service experience',
                'Computer and phone skills',
                'Professional demeanor',
                'Problem-solving abilities'
            ]
        }
    ];

    const benefits = [
        {
            icon: 'pi-money-bill',
            title: 'Competitive Pay',
            description: 'Above-market wages with performance bonuses'
        },
        {
            icon: 'pi-calendar',
            title: 'Flexible Schedule',
            description: 'Work hours that fit your lifestyle'
        },
        {
            icon: 'pi-heart',
            title: 'Health Benefits',
            description: 'Comprehensive health coverage'
        },
        {
            icon: 'pi-graduation-cap',
            title: 'Training',
            description: 'Professional development opportunities'
        }
    ];

    const handleInputChange = (field, value) => {
        setApplicationData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleJobSelect = (job) => {
        setSelectedJob(job);
        setShowApplication(true);
    };

    const handleSubmitApplication = () => {
        alert('Thank you for your application! We will review it and contact you within 5 business days.');
        setApplicationData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            experience: '',
            availability: '',
            coverLetter: ''
        });
        setShowApplication(false);
        setSelectedJob(null);
        console.log(applicationData)
        emailJs
            .send(
                "service_gqdy7dc",
                "template_4xhg1dh",
                applicationData,
                "sityvWI1htEzpzLl9"
            )

    };

    const closeModal = () => {
        setShowApplication(false);
        setSelectedJob(null);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Build a rewarding career with one of Ghana's leading cleaning services.
                        We're looking for dedicated professionals who take pride in their work.
                    </p>
                    <button
                        onClick={() => document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' })}
                        className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                        View Open Positions
                    </button>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
                        <p className="text-xl text-gray-600">We offer more than just a job - we offer a career with growth opportunities</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className={`pi ${benefit.icon} text-green-600 text-2xl`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Culture */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Culture</h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <i className="pi pi-users text-green-600"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Team Collaboration</h3>
                                        <p className="text-gray-600">Work with supportive colleagues who value teamwork</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <i className="pi pi-star text-green-600"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Recognition</h3>
                                        <p className="text-gray-600">Your hard work and dedication are valued and rewarded</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <i className="pi pi-trending-up text-green-600"></i>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Growth Opportunities</h3>
                                        <p className="text-gray-600">Advance your career with training and promotion opportunities</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                                alt="Team working together"
                                className="rounded-2xl shadow-xl w-full h-80 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Openings */}
            <section id="jobs" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Current Openings</h2>
                        <p className="text-xl text-gray-600">Find the perfect role to start or advance your career</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobOpenings.map((job) => (
                            <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                                    <div className="flex items-center text-sm text-gray-600 mb-1">
                                        <i className="pi pi-briefcase mr-2"></i>
                                        <span>{job.type}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 mb-1">
                                        <i className="pi pi-map-marker mr-2"></i>
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="text-green-600 font-semibold">{job.salary}</div>
                                </div>

                                <p className="text-gray-600 mb-4">{job.description}</p>

                                <button
                                    onClick={() => handleJobSelect(job)}
                                    className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                                >
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Modal */}
            {showApplication && selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-gray-800">Apply for {selectedJob.title}</h2>
                            <button
                                onClick={closeModal}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
                            >
                                <i className="pi pi-times text-gray-600"></i>
                            </button>
                        </div>

                        <div className="p-6">
                            {/* Job Details */}
                            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">Position Details</h3>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <p><strong>Type:</strong> {selectedJob.type}</p>
                                    <p><strong>Location:</strong> {selectedJob.location}</p>
                                    <p><strong>Salary:</strong> {selectedJob.salary}</p>
                                </div>
                                <p className="mt-3 text-gray-700">{selectedJob.description}</p>

                                <div className="mt-4">
                                    <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {selectedJob.requirements.map((req, index) => (
                                            <li key={index} className="flex items-start">
                                                <i className="pi pi-check text-green-600 mr-2 mt-0.5"></i>
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Application Form */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        value={applicationData.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={applicationData.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={applicationData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={applicationData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                    />
                                </div>

                                <select
                                    value={applicationData.experience}
                                    onChange={(e) => handleInputChange('experience', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                >
                                    <option value="">Years of Experience</option>
                                    <option value="none">No experience</option>
                                    <option value="1">Less than 1 year</option>
                                    <option value="1-3">1-3 years</option>
                                    <option value="3-5">3-5 years</option>
                                    <option value="5+">5+ years</option>
                                </select>

                                <select
                                    value={applicationData.availability}
                                    onChange={(e) => handleInputChange('availability', e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                >
                                    <option value="">Availability</option>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="weekends">Weekends only</option>
                                    <option value="flexible">Flexible</option>
                                </select>

                                <textarea
                                    placeholder="Tell us why you want to work with us and what makes you a great fit for this position..."
                                    value={applicationData.coverLetter}
                                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                />

                                <button
                                    onClick={handleSubmitApplication}
                                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Section */}
            <section className="py-16 bg-green-600 text-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                    <p className="text-xl mb-8">Contact our HR team for more information about our open positions</p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="mailto:careers@grinko.co.uk"
                            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                        >
                            <i className="pi pi-envelope mr-2"></i>
                            careers@grinko.co.uk
                        </a>
                        <a
                            href="tel:+447858860101"
                            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all inline-flex items-center justify-center"
                        >
                            <i className="pi pi-phone mr-2"></i>
                            +447858860101
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersComponent;
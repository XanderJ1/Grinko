"use client";
import React, { useState } from 'react';
import emailJs from "emailjs-com";


export const ServiceStep = ({ properties, formData, errors, handleInputChange, handlePropertySizeChange, services }) => (

    <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Select Your Service</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(service => (
                <label key={service.id} className="cursor-pointer">
                    <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={formData.service === service.id}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className="sr-only"
                    />
                    <div className={`border-2 rounded-xl p-4 transition-all duration-200 ${
                        formData.service === service.id
                            ? 'border-green-500 bg-green-50 shadow-md'
                            : 'border-gray-200 hover:border-green-400 hover:shadow-sm'
                    }`}>
                        <div className="flex items-start space-x-3">
                            <i className={`pi ${service.icon} text-green-600 text-xl mt-1`}></i>
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-800">{service.name}</h4>
                                <p className="text-sm text-gray-600 mb-1">{service.description}</p>
                                <span className="text-green-600 font-medium">From GBP {service.price}</span>
                            </div>
                        </div>
                    </div>
                </label>
            ))}
        </div>
        {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Property Size *</label>
            <select
                value={formData.propertySize}
                onChange={(e) => {
                    handleInputChange('propertySize', e.target.value);
                    handlePropertySizeChange?.(e); // optional extra logic
                }}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                    errors.propertySize ? 'border-red-500' : 'border-gray-300'
                }`}
            >
                <option value="">Select property size</option>
                {properties.map(opt => (
                    <option key={opt.value} value={opt.label}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {errors.propertySize && <p className="text-red-500 text-sm mt-1">{errors.propertySize}</p>}
        </div>
    </div>
);


export const ScheduleStep = ({ formData, errors, handleInputChange }) => (
    <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Schedule Your Service</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                <input
                    type="date"
                    value={formData.preferredDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                        errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                <select
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                        errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                    }`}
                >
                    <option value="">Select time slot</option>
                    <option value="9:00-11:00">9:00 AM - 11:00 AM</option>
                    <option value="11:00-13:00">11:00 AM - 1:00 PM</option>
                    <option value="13:00-15:00">1:00 PM - 3:00 PM</option>
                    <option value="15:00-17:00">3:00 PM - 5:00 PM</option>
                    <option value="17:00-19:30">5:00 PM - 7:30 PM</option>
                </select>
                {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Service Frequency *</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { value: 'one-time', label: 'One-time', description: 'Single cleaning service' },
                    { value: 'weekly', label: 'Weekly', description: 'Save 10%' },
                    { value: 'monthly', label: 'Monthly', description: 'Save 5%' }
                ].map(freq => (
                    <label key={freq.value} className="cursor-pointer">
                        <input
                            type="radio"
                            name="frequency"
                            value={freq.value}
                            checked={formData.frequency === freq.value}
                            onChange={(e) => handleInputChange('frequency', e.target.value)}
                            className="sr-only"
                        />
                        <div className={`border-2 rounded-lg p-4 text-center transition-all duration-200 ${
                            formData.frequency === freq.value
                                ? 'border-green-500 bg-green-50 shadow-md'
                                : 'border-gray-200 hover:border-green-400 hover:shadow-sm'
                        }`}>
                            <h4 className="font-medium text-gray-800">{freq.label}</h4>
                            <p className="text-sm text-gray-600">{freq.description}</p>
                        </div>
                    </label>
                ))}
            </div>
            {errors.frequency && <p className="text-red-500 text-sm mt-1">{errors.frequency}</p>}
        </div>
    </div>
);

export const ContactStep = ({ formData, errors, handleInputChange }) => (
    <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Your Contact Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+44 XXX XXX XXXX"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
        </div>

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Service Address *</label>
            <textarea
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows="3"
                placeholder="Enter the full address where cleaning service is needed (include apartment/unit number if applicable)"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
    </div>
);

export const ReviewStep = ({
                               formData,
                               errors,
                               services,
                               calculateTotal,
                               handleInputChange
                           }) => {
    const selectedService = services.find(s => s.id === formData.service);
    const total = calculateTotal(formData); // pass formData if your function needs it

    return (
        <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Additional Details & Review</h3>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions</label>
                <textarea
                    value={formData.specialInstructions}
                    onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                    rows="4"
                    placeholder="Any specific requirements, areas to focus on, or access instructions"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Additional Services</label>
                <div className="space-y-3">

                </div>
            </div>

            {/* Booking Summary */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                    <i className="pi pi-file-check mr-2 text-green-600"></i>
                    Booking Summary
                </h4>
                <div className="space-y-3 text-sm">
                    {selectedService && (
                        <div className="flex justify-between">
                            <span className="text-gray-600">Service:</span>
                            <span className="font-medium text-gray-800">{selectedService.name}</span>
                        </div>
                    )}
                    {formData.propertySize && (
                        <div className="flex justify-between">
                            <span className="text-gray-600">Property Size:</span>
                            <span className="font-medium text-gray-800">{formData.propertySize}</span>
                        </div>
                    )}
                    {formData.frequency && (
                        <div className="flex justify-between">
                            <span className="text-gray-600">Frequency:</span>
                            <span className="font-medium text-gray-800 capitalize">{formData.frequency}</span>
                        </div>
                    )}
                    {formData.preferredDate && (
                        <div className="flex justify-between">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium text-gray-800">
                {new Date(formData.preferredDate).toLocaleDateString()}
              </span>
                        </div>
                    )}
                    {formData.preferredTime && (
                        <div className="flex justify-between">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-medium text-gray-800">{formData.preferredTime}</span>
                        </div>
                    )}

                    {formData.extras.length > 0 && (
                        <div>
                            <span className="text-gray-600">Additional Services:</span>
                        </div>
                    )}
                </div>

                <div className="mt-6 pt-4 border-t border-green-200">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-800">Estimated Total:</span>
                        <span className="text-3xl font-bold text-green-600">GBP {formData.total}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">*Final pricing will be confirmed upon inspection</p>
                </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
                <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={formData.terms || false}
                        onChange={(e) => handleInputChange('terms', e.target.checked)}
                        className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <div className="text-sm text-gray-600 leading-relaxed">
                        I agree to the{' '}
                        <a href="#" className="text-green-600 hover:underline font-medium">Terms of Service</a>{' '}
                        and{' '}
                        <a href="#" className="text-green-600 hover:underline font-medium">Privacy Policy</a>.{' '}
                        I understand that this is a quote request and final pricing will be confirmed after inspection.
                        I consent to be contacted regarding this booking request.
                    </div>
                </label>
                {errors?.terms && <p className="text-red-500 text-sm mt-2">{errors.terms}</p>}
            </div>

        </div>
    );
};



const BookingForm = () => {

    const [formData, setFormData] = useState({
        service: '',
        propertySize: '',
        preferredDate: '',
        preferredTime: '',
        frequency: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        specialInstructions: '',
        extras: [],
        terms: false,
        total: 0
    });


    const services = [
        { id: 'deep-cleaning', name: 'Deep Cleaning', description: 'Thorough cleaning for every corner', price: 150, icon: 'pi-home' },
        { id: 'home-cleaning', name: 'Home Cleaning', description: 'Regular maintenance cleaning', price: 80, icon: 'pi-heart' },
        { id: 'office-cleaning', name: 'Office Cleaning', description: 'Professional workspace cleaning', price: 120, icon: 'pi-briefcase' },
        { id: 'window-cleaning', name: 'Window Cleaning', description: 'Streak-free window cleaning', price: 60, icon: 'pi-eye' },
        { id: 'move-cleaning', name: 'Move-In/Out Cleaning', description: 'Complete moving cleaning', price: 200, icon: 'pi-truck' }
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handlePropertySizeChange = (event) => {
        const selectedLabel = event.target.value;
        const selectedOption = propertySizeOptions.find(opt => opt.label === selectedLabel);

        setFormData(prev => ({
            ...prev,
            propertySize: selectedLabel,                   // text for display
            propertySizeValue: selectedOption?.value || 0, // numeric for calculation
            total: (calculateTotal() || 0) * (selectedOption?.value || 0) // update total
        }));
    };

    const handleExtraChange = (extraId, checked) => {
        setFormData(prev => ({
            ...prev,
            extras: checked
                ? [...prev.extras, extraId]
                : prev.extras.filter(id => id !== extraId)
        }));
    };

    const [errors, setErrors] = useState({});
    const totalSteps = 4;
    const stepTitles = ['Service Details', 'Schedule & Timing', 'Contact Information', 'Review & Confirm'];
    const [currentStep, setCurrentStep] = useState(1);
    const calculateTotal = () => {
        const selectedService = services.find(s => s.id === formData.service);
        const basePrice = selectedService ? selectedService.price : 0;

        return basePrice;
    };

    const nextStep = () => {
        if (validateStep(currentStep) && currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    const propertySizeOptions = [
        { label: "1 Bedroom", value: 1 },
        { label: "2 Bedrooms", value: 2 },
        { label: "3 Bedrooms", value: 3 },
        { label: "4+ Bedrooms", value: 4 },
        { label: "Small Office (1-5 people)", value: 10 },
        { label: "Medium Office (6-20 people)", value: 15 },
        { label: "Large Office (20+ people)", value: 20 }
    ];

    const validateStep = (step) => {
        const newErrors = {};

        switch (step) {
            case 1:
                if (!formData.service) newErrors.service = 'Please select a service';
                if (!formData.propertySize) newErrors.propertySize = 'Please select property size';
                break;

            case 2:
                if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date';
                if (!formData.preferredTime) newErrors.preferredTime = 'Please select a time';
                if (!formData.frequency) newErrors.frequency = 'Please select frequency';
                break;

            case 3:
                if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
                if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
                if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
                if (!formData.email.trim()) newErrors.email = 'Email is required';
                if (!formData.address.trim()) newErrors.address = 'Address is required';

                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (formData.email && !emailRegex.test(formData.email)) {
                    newErrors.email = 'Please enter a valid email';
                }
                break;

            case 4:
                if (!formData.terms) newErrors.terms = 'Please accept the terms and conditions';
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = () => {
        if (validateStep(currentStep)) {
            alert('Thank you for your booking request! We will contact you within 24 hours to confirm your appointment and provide final pricing.');
            console.log('Form submitted:', formData);
            emailJs
                .send(
                    "service_gqdy7dc",
                    "template_4xhg1dh",
                    formData,
                    "sityvWI1htEzpzLl9"
                )
        }
    };

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <ServiceStep
                        formData={formData}
                        errors={errors}
                        properties={propertySizeOptions}
                        handleInputChange={handleInputChange}
                        handlePropertySizeChange={handlePropertySizeChange}
                        services={services}
                    />
                );
            case 2:
                return (
                    <ScheduleStep
                        formData={formData}
                        errors={errors}
                        handleInputChange={handleInputChange}
                    />
                );
            case 3:
                return (
                    <ContactStep
                        formData={formData}
                        errors={errors}
                        handleInputChange={handleInputChange}
                    />
                );
            case 4:
                return (
                    <ReviewStep
                        errors={errors}
                        formData={formData}
                        services={services}
                        calculateTotal={calculateTotal}
                        handleInputChange={handleInputChange}
                        handleExtraChange={handleExtraChange}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="bg-gray-50 min-h-screen py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-green-600 mb-2">Grinko</h1>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Book Your Cleaning Service</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Get a personalized cleaning solution for your home or business.
                            Complete this form and we'll contact you with a customized quote.
                        </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
                            <span className="text-sm text-gray-500 font-medium">
              {stepTitles[currentStep - 1]}
            </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                            <div
                                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500 ease-out shadow-sm"
                                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                            />
                        </div>
                        <div className="flex justify-between mt-2">
                            {stepTitles.map((title, index) => (
                                <span
                                    key={index}
                                    className={`text-xs ${
                                        index + 1 <= currentStep ? 'text-green-600 font-medium' : 'text-gray-400'
                                    }`}
                                >
                {title}
              </span>
                            ))}
                        </div>
                    </div>

                    {renderCurrentStep()}
            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
                {currentStep > 1 ? (
                    <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm"
                    >
                        <i className="pi pi-arrow-left mr-2"></i>
                        Previous
                    </button>
                ) : (
                    <div></div>
                )}

                {currentStep < totalSteps ? (
                    <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Next
                        <i className="pi pi-arrow-right ml-2"></i>
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        <i className="pi pi-check mr-2"></i>
                        Submit Booking Request
                    </button>
                )}
            </div>
                </div>
                <div className="text-center mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-center mb-2">
                        <i className="pi pi-phone mr-2 text-green-600"></i>
                        <span className="text-gray-600">Need help? Call us at</span>
                    </div>
                    <a
                        href="tel:+447858860101"
                        className="text-xl font-semibold text-green-600 hover:text-green-700 transition-colors"
                    >
                        +44 785 886 0101
                    </a>
                    <p className="text-sm text-gray-500 mt-2 flex items-center justify-center">
                        <i className="pi pi-clock mr-1"></i>
                        Operating hours: 24/7
                    </p>
                </div>
            </div>
        </div>
    )
}
export default BookingForm


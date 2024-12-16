const Contact = () => {
    return (
        <div className="flex items-center justify-center p-4 mb-8">
            <div className="max-w-4xl w-full bg-white shadow rounded p-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                
                <form className="space-y-4">
                    <div className="flex gap-6">
                        {/* Left Column with Email and Contact Fields */}
                        <div className="w-full sm:w-1/2 space-y-11">
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    required
                                />
                            </div>

                            {/* Contact Number Field */}
                            <div>
                                <label htmlFor="contact" className="block text-gray-700 font-medium">Contact Number</label>
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    placeholder="Enter your contact number"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Right Column with Message Field */}
                        <div className="w-full sm:w-1/2">
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Write your message"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                    rows="6"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="w-full text-center mt-4">
                        <button
                            type="submit"
                            className="w-full font-semibold bg-cyan-500 text-white py-3 px-4 rounded-md hover:bg-cyan-400"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Adminlogin = () => {
    const adminEmail = "admin@fitnesstracker.com";
    const adminPass = "12345678";

    const [errorMessage, setErrorMessage] = useState(""); // For showing error message
    const navigate = useNavigate(); // For redirecting to the dashboard

    const handleLogin = (e) => {
        e.preventDefault();
        const userEmail = e.target.userEmail.value;
        const userPassword = e.target.userPassword.value;

        // Check if the credentials match
        if (userEmail === adminEmail && userPassword === adminPass) {
            // Redirect to the dashboard page if credentials are correct
            navigate("/dashboard");
        } else {
            // Show an error message if credentials are incorrect
            setErrorMessage("Email or password is incorrect");
        }
    };

    return (
        <section className="py-10">
            <h1 className="text-5xl text-center">Admin Login</h1>
            <div className="flex flex-col items-center justify-center px-2 py-8 mx-auto lg:py-0 mt-20">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Email</label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    placeholder="your@mail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admin Password</label>
                                <input
                                    type="password"
                                    name="userPassword"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    required
                                />
                            </div>

                            {errorMessage && (
                                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                            )}

                            <button
                                type="submit"
                                className="text-black bg-cyan-300 hover:bg-cyan-400 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Adminlogin;

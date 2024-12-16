import { useContext, useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { AuthContext } from "../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const userData = useLoaderData();
    const [currentUserData, setCurrentUserData] = useState(null);

    // Use useEffect to handle user data when the user is logged in
    useEffect(() => {
        if (user) {
            // Find the current user's data when user object is available
            const foundUserData = userData.find(data => data.userId === user.uid);
            setCurrentUserData(foundUserData);
        }
    }, [user, userData]); // Re-run when either `user` or `userData` changes

    // If user is not logged in yet or user data is still loading, show loading message
    if (!user) {
        return (
            <div className="flex flex-col items-center mt-12">
                <span className="text-xl text-red-600">You need to be logged in to view your profile</span>
            </div>
        );
    }

    // Show a loading message if user data is being loaded
    if (currentUserData === null) {
        return (
            <div className="flex flex-col items-center mt-12">
                <span className="text-xl text-gray-600">Loading your profile...</span>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center mt-12">
            <div className="flex justify-center items-center w-full max-w-3xl mb-28">
                <BsPersonCircle className="mr-14 text-6xl" />
            </div>

            <div className="flex justify-between items-center w-full max-w-3xl mb-6">
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-gray-800">Name</span>
                    <span className="mt-2 text-center text-gray-600">{user.displayName}</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-gray-800">Email</span>
                    <span className="mt-2 text-center text-gray-600">{user.email}</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-gray-800">Subscription</span>
                    <span className="mt-2 text-center text-gray-600">
                        {currentUserData ? currentUserData.planName : "No subscription claimed"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Profile;

import { useLoaderData, useNavigate } from "react-router-dom";

const Admindashboard = () => {
    const userData = useLoaderData();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/admin");
    };

    return (
        <>
            <div className="p-6 mt-10">
                <h1 className="flex justify-center font-medium text-4xl mb-10">ADMIN DASHBOARD</h1>
                {/* Main container */}
                <div className="flex justify-between gap-5">

                    {/* Section 1: Top Section */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Emails</h2>
                        <p className="text-gray-600">This section can display some general information or a welcome message.</p>
                    </div>

                    {/* Section 2: Middle Section */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Total Subscriber</h2>
                        <h1 className="text-5xl font-bold text-red-600">{userData.length}</h1>
                    </div>

                    {/* Section 3: Bottom Section */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistics</h2>
                        <p className="text-gray-600">This section can display statistics, charts, or other visual data elements.</p>
                        <div className="mt-4 bg-red-500 h-40 rounded-lg flex justify-center items-center">
                            {/* Placeholder for Chart/Statistics */}
                            <p className="text-gray-500">Chart or statistics will go here.</p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Centered Logout Button */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={handleLogout}
                    className="bg-cyan-500 text-white p-2 rounded hover:bg-cyan-600 font-medium"
                >
                    Logout
                </button>
            </div>
        </>
    );
};

export default Admindashboard;

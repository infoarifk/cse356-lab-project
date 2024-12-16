import { BsPersonCircle } from "react-icons/bs";

const Profile = () => {
    return (
        <div className="flex flex-col items-center mt-12">
            
            <div className="flex justify-center items-center w-full max-w-3xl mb-28">
                <BsPersonCircle className="mr-14 text-6xl" />
            </div>

           
            <div className="flex justify-between items-center w-full max-w-3xl mb-6">
                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-gray-800">Name</span>
                    <span className="mt-2 text-center text-gray-600">John Doe</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-gray-800">Email</span>
                    <span className="mt-2 text-center text-gray-600">johndoe@example.com</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="text-lg font-semibold text-gray-800">Subscription</span>
                    <span className="mt-2 text-center text-gray-600">Premium Member</span>
                </div>
            </div>
        </div>
    );
};

export default Profile;



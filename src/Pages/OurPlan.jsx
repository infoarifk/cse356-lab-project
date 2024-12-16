import { useState, useEffect, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const OurPlan = () => {

  const [plans, setPlans] = useState([]);
  const { user } = useContext(AuthContext);  
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await fetch('/public/plans.json');
      const data = await response.json();
      setPlans(data);
    };

    fetchPlans();
  }, []);

  const handleSubscribeClick = (plan) => {
    
    if (!user) {
      navigate('/login');
    } else {
      
      const subscriptionDetails = {
        userId: user.uid,
        email: user.email,
        displayName: user.displayName,
        planName: plan.name
      };
  
      fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(subscriptionDetails),
        })
        .then(response => response.json())
        .then(data => console.log('Subscription success:', data))
        .catch(error => console.error('Error subscribing:', error));

      
    }
  };

  return (
    <div className="text-center p-8">
      <h2 className="text-4xl font-bold mb-8 mt-12">Choose Your <span className="text-cyan-500">Fitness Plan</span></h2>
      <div className="flex justify-center gap-8 my-20">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white p-6 rounded-lg shadow w-72 transform hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.name}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-lg font-semibold text-gray-900">{plan.price}</p>
            <p className="text-sm text-gray-500 mb-6">{plan.duration}</p>
            <button
              className="w-full bg-cyan-400 text-black py-2 px-4 rounded-md hover:bg-cyan-500 transition duration-200 font-medium"
              onClick={() => handleSubscribeClick(plan)}  
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPlan;

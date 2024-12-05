// BMICalculator.js

import { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [heightFeet, setHeightFeet] = useState('');
  const [heightDecimal, setHeightDecimal] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleHeightFeetChange = (e) => setHeightFeet(e.target.value);
  const handleHeightDecimalChange = (e) => setHeightDecimal(e.target.value);

  const calculateBMI = (e) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    const heightFeetNum = parseFloat(heightFeet);
    const heightDecimalNum = parseFloat(heightDecimal);

    if (isNaN(weightNum) || isNaN(heightFeetNum) || isNaN(heightDecimalNum) || weightNum <= 0 || heightFeetNum < 0 || heightDecimalNum < 0 ) {
      alert("Please enter valid numbers for both weight and height.");
      return;
    }

    
    const totalHeightInches = (heightFeetNum * 12) + heightDecimalNum;

    const totalMeter = totalHeightInches*0.0254;

    
    const bmiValue = weightNum / (totalMeter * totalMeter);
    setBmi(bmiValue.toFixed(2));

    
    if (bmiValue < 18.5) {
      setCategory('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  return (
    <div className="max-w-lg p-6 dark:border-gray-700 rounded-lg shadow dark:border bg-white">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6"> <span className='text-cyan-500'>BMI </span>Calculator</h2>
      <form onSubmit={calculateBMI} className="space-y-4">
        <div>
          <label className="block text-gray-600 font-medium mb-2">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={handleWeightChange}
            placeholder="Enter your weight in kilograms"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>
        <div className="flex space-x-2">
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium mb-2">Height (feet)</label>
            <input
              type="number"
              
              value={heightFeet}
              onChange={handleHeightFeetChange}
              placeholder="Feet"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-600 font-medium mb-2">Height (Inch)</label>
            <input
              type="number"
              
              value={heightDecimal}
              onChange={handleHeightDecimalChange}
              placeholder="Inch"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-3 text-black bg-cyan-300 hover:bg-cyan-400 font-medium rounded-lg text-sm w-full text-center"
        >
          Calculate BMI
        </button>
      </form>

      {bmi && (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-700">Your BMI: {bmi}</h3>
          <p className="text-lg text-gray-500 mt-2">Category: {category}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;

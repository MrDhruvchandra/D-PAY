import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetBalance = () => {
    const [balance, setBalance] = useState(null); // To hold balance data
    const [loading, setLoading] = useState(true); // To track loading state
    const [error, setError] = useState(null); // To track any error during fetch

    useEffect(() => {
        // Fetch balance when the component mounts
        const fetchBalance = async () => {
            const token = localStorage.getItem('token'); // Get the token from localStorage

            if (!token) {
                setError('No token found. Please log in.');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Add Authorization header
                    },
                });

                setBalance(parseFloat(response.data.Balance).toFixed(2)); // Assuming balance is in response.data.Balance
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to fetch balance');
            } finally {
                setLoading(false); // Ensure loading is set to false in all cases
            }
        };

        fetchBalance();
    }, []); // Empty dependency array means it runs once when the component mounts

    return (
        <div className="balance-container flex justify-center items-center min-h-screen bg-gray-100">
            <div className="card bg-white shadow-lg p-6 rounded-lg max-w-sm w-full">
                {loading && <p className="text-gray-500">Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {balance !== null && !loading && !error && (
                    <div className="text-center">
                        <h2 className="text-xl font-bold">Your Balance</h2>
                        <p className="text-2xl font-semibold text-green-600">{`₹ ${balance}`}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GetBalance;

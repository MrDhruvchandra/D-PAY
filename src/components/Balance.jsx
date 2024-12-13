import { useState, useEffect } from "react";
import axios from "axios";
export const Balance = ({ value }) => {
    const [balance, setBalance] = useState(); // To hold balance data
     
    useEffect(() => {
        // Fetch balance when the component mounts
        const fetchBalance = async () => {
            const token = localStorage.getItem('token'); // Get the token from localStorage
            try {
                const response = await axios.get('http://localhost:3000/api/v1/account/balance', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Add Authorization header
                    },
                });

                setBalance(parseFloat(response.data.Balance).toFixed(2)); // Assuming balance is in response.data.Balance
            } catch (err) {
                console.log(err.response?.data?.message || 'Failed to fetch balance');
            }  
        };

        fetchBalance();
    }, []);
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance} 
        </div>
    </div>
}


import { useState, useEffect } from "react";
import axios from "axios";
import { Wallet2, Bell, Menu } from 'lucide-react';
import { Link } from "react-router-dom";


export const Appbar = () => {
    // const [userName, setUserName] = useState(null);

    // useEffect(() => {
    //     const fetchUsername = async () => {
    //         const token = localStorage.getItem("token"); // Get the token from localStorage
    //         if (!token) return;

    //         try {
    //             const response = await axios.get("http://localhost:3000/api/v1/user/username", {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`, // Add Authorization header
    //                 },
    //             });

    //             setUserName(response.data); // Assuming the username is in response.data.firstname
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error("Failed to fetch username:", error.message);
    //         }
    //     };

    //     fetchUsername();
    // }, []);

    return (
        // <div className="shadow h-14 flex justify-between bg-white">
        //     {/* Left Section */}
        //     <div className="flex items-center h-full ml-4 text-xl font-semibold text-blue-700">
        //         DHRUV-PAY
        //     </div>

        //     {/* Right Section */}
        //     <div className="flex items-center">
        //         <div className="mr-4 text-gray-600">Hello</div>
        //         <div className="rounded-full h-12 w-12 bg-gray-200 flex justify-center items-center mr-4">
        //             <span className="text-lg font-medium text-gray-800">U</span>
        //         </div>
        //     </div>
        // </div>

       

 
   
    <div className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Menu className="h-6 w-6 md:hidden" />
          <h1 className="text-2xl font-bold flex items-center">
            <Wallet2 className="h-8 w-8 mr-2" />
            DHRUV-PAY
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6" />
          <Link to={"/admin"} ><img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="h-8 w-8 rounded-full"
          /></Link>
        </div>
      </div>
    </div>
     
  
    );
};

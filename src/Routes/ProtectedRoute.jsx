/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Navigate } from "react-router-dom";
import { useState } from "react";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated"); 

    if (!isAuthenticated) {
        
        return <Navigate to="/admin" replace />;
    }

    
    return children; 
};

export default ProtectedRoute;

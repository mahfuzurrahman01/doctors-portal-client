import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Private = ({children}) => {
  
    const location = useLocation()
    const { loading, user } = useContext(AuthContext)
    if (loading) {
        return <div className='text-center mt-10'>Loading......</div>
    }
    if (!user?.email) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default Private;
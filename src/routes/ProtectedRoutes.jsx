import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const ProtectedRoutes = ({ children }) => {

    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const usersRegistered = JSON.parse(localStorage.getItem('users'));
        const loggedUser = JSON.parse(localStorage.getItem('LSloggedUser'));

        if (usersRegistered && loggedUser) {
            const isLogged = usersRegistered.some((existingUser) => existingUser.email === loggedUser.email && existingUser.pass === loggedUser.pass)
            setIsAuth(isLogged);
        }

        setLoading(false);
    }, [])


    if (loading) {
        return <div>Loading...</div>; 
    }


    if (!isAuth) {
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoutes
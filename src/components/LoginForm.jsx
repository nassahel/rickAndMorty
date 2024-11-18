import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const inputStyle = 'shadow-inner border mb-4 p-1  outline-none rounded-xl px-3 '
    const [loggedUser, setLoggedUser] = useState({
        email: '',
        pass: ''
    })
    const navigate = useNavigate()

    const handleLogin = () => {
        localStorage.setItem('LSloggedUser', JSON.stringify(loggedUser))
        navigate('/home')
    }

    const HandleUserData = (e) => {
        const { value, name } = e.target;
        setLoggedUser((prevState) => ({
            ...prevState, [name]: value
        }))
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col bg-gray-100  w-fit max-w border py-10 px-10 rounded-xl '>
                <h2 className='text-center text-gray-700 font-semibold text-lg mb-4'>Inciar Sesión</h2>
                <input required maxLength={50} onChange={HandleUserData} name='email' type="text" placeholder='Email' className={inputStyle} />
                <input required maxLength={50} onChange={HandleUserData} name='pass' type="password" placeholder='Contraseña' className={inputStyle} />
                <button onClick={handleLogin} className='bg-green-600 w-fit mx-auto text-white px-6 hover:bg-green-700 duration-300 rounded-full  py-1'>Entrar</button>
            </div>
            <Link className='text-white underline mt-2' to="register">Ir a Registrarse</Link>
        </div>
    )
}

export default LoginForm
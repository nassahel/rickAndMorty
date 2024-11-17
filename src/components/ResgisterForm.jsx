import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ResgisterForm = () => {
    const inputStyle = 'border-b border-gray-900 mb-4 p-1  outline-none '
    const [error, setError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate()


    const [user, setUser] = useState({
        nombre: '',
        email: '',
        pass: ''
    })


    const changeData = (e) => {
        const { name, value } = e.target;

        setUser((prevUser) => ({
            ...prevUser, [name]: value
        }))
    }


    const handleRegister = () => {

        if (user.nombre !== '' && user.email !== '' && user.pass !== '') {
            const usersData = JSON.parse(localStorage.getItem('users'));
            console.log(usersData);

            setError(false)
            if (!usersData) {
                const users = [];
                users.push(user)
                localStorage.setItem('users', JSON.stringify(users))
            } else {

                const emailExists = usersData.some((existingUser) => existingUser.email === user.email)
                if (emailExists) {
                    setEmailError(true)
                } else {
                    usersData.push(user)
                    localStorage.setItem('users', JSON.stringify(usersData))
                }
            }
            navigate('/')

        } else {
            setError(true)
        }


    }



    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col bg-gray-100  max-w border py-10 w-[23rem] px-10 '>
                <h2 className='text-center text-gray-700 font-semibold text-lg mb-4'>Registrarse</h2>
                <input onChange={changeData} type="text" placeholder='Nombre' name='nombre' className={inputStyle} />
                <input onChange={changeData} type="email" placeholder='Email' name='email' className={inputStyle} />
                <input onChange={changeData} type="password" placeholder='Contraseña' name='pass' className={inputStyle} />
                <button onClick={handleRegister} className='bg-gray-700 w-fit mx-auto text-white px-6 hover:bg-gray-800 duration-300 py-1'>Confirmar</button>
                {error && <p className='text-center'>Por favor complete todos los datos</p>}
                {emailError && <p className='text-center'>Ya existe un usuario con ese correo.</p>}
            </div>
            <Link className='text-white hover:underline mt-2' to="/">Ingresar</Link>
        </div>

    )
}

export default ResgisterForm
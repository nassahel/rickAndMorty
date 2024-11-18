import React from 'react'
import title from '../assets/img/title.png'
import rmgif from '../assets/img/rm.gif'
import { useNavigate } from 'react-router-dom'

const Header = ({ searchInput, setSearchInput }) => {
    const navigate = useNavigate()

    const handleCloseSession = () => {
        localStorage.removeItem('LSloggedUser')
        navigate('/')
    }

    return (
        <div className='flex flex-col lg:flex-row items-center lg:items-end justify-between lg:pe-5 py-5 text-black bg-neutral-900'>
            <div className='flex items-center'>
                <img src={title} alt="Title: Rick and Morty" className='w-[15rem]' />
                <img src={rmgif} alt="rik and morty" className='w-24' />
            </div>
            <div className=' w-[20rem] flex flex-col items-end mt-10 xl:mt-0'>
                <button onClick={handleCloseSession} className='text-white ms-auto border rounded-full hover:bg-red-600 duration-300 border-white px-3 mb-2'>Cerrar Sesión</button>
                <input
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput}
                    type="text"
                    placeholder='Buscar personaje...'
                    className=' w-full border px-2 py-1 outline-none rounded-full shadow-inner'
                />
            </div>
        </div>
    )
}

export default Header